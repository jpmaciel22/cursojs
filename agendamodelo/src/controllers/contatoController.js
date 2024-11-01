const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  if(req.session.user) return res.render('contato', {contato: {}});
  return res.render('login');
    };

exports.register = async (req,res) => {
  try{
  const contato = new Contato(req.body, req.session.user.email);
  await contato.register()
  let idUser = null;
  if(contato.errors.length > 0){
    req.flash('errors',contato.errors);
    req.session.save(() => res.redirect('/contato'));
    return;
  }
  req.flash('success','Seu contato foi cadastrado.');
  idUser = contato.contato._id;
  req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
  return idUser;
  }
  catch(error){
    console.log(error);
    res.render('404');
  }
} 

exports.editIndex = async function(req,res){
  try{
    if(req.session.user){
  if(!req.params.id) return res.render('404');
  
  const contato = await Contato.buscaPorId(req.params.id);
  if(!contato) return res.render('404');
  idUser = contato._id;
  req.session.contato = {
    _id: idUser || '',
    nome: contato.nome,
    sobrenome: contato.sobrenome,
    cel: contato.cel,
    email: contato.email,
    idUser: contato.idUser
}
  res.render('contato', { contato });
}
return res.render('login');}
catch(error){
  return res.render('404');
}}

exports.edit = async function(req,res){
  try{
    if(req.session.user){}
  if(!req.params.id) return res.render('404');

  const contato = new Contato(req.body, req.session.user.email);
  await contato.edit(req.params.id);
  idUser = req.params.id;

  if(contato.errors.length > 0){
    req.flash('errors',contato.errors);
    req.session.contato = {
      _id: idUser,
      nome: contato.nome,
      sobrenome: contato.sobrenome,
      cel: contato.cel,
      email: contato.email,
      idUser: contato.idUser
      }
      req.session.save(() => res.render('/contato',{body: req.session.contato, errors: contato.errors}));
    // req.session.save(() => res.redirect(`/contato/${req.params.id}`)); // n sei pq mas n funciona se for igual
    // // ao de baixo
    return;
  }
  req.flash('success','Contato editado com sucesso.');
  idUser = contato.contato._id;
  req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
  return;}
  catch(erro){
    res.render('404');
  }
}
exports.delete = async function(req,res){
  try{
    if(req.session.user){
  if(!req.params.id) return res.render('404');
  
  const contato = await Contato.delete(req.params.id);
  
  if(!contato) return res.render('404');
  req.flash('success','Seu contato foi deletado com sucesso.');
  req.session.save(() => res.redirect(`/`));
return;
}
return res.render('login')}
  catch(error){
    res.render('404');
  }
}