const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: true },
  criadoEm: {type: Date, required: false, default: Date.now}
  // userId: {type:, required: true, }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);
function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;

}

Contato.buscaPorId = async function (id){
  if(typeof id != 'string') return;
 const contato = await ContatoModel.findById(id);
 return contato;
}

Contato.buscaContatos = async function(id){
  const contatos = await ContatoModel.find()
  .sort({criadoEm: -1});
  return contatos;
}

Contato.prototype.register = async function(){
  this.valida();

  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function() {
  this.cleanUp();

  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email inválido.');
  if(!this.body.nome) this.errors.push('Não é permitido cadastrar sem nome.');
  if(!this.body.sobrenome) this.errors.push('Não é permitido cadastrar sem sobrenome.');
  if(!this.body.telefone) this.errors.push('Não é permitido cadastrar sem telefone.');

}

Contato.prototype.cleanUp = function(){
     //Faz um loop nas chaves do body, e garante que tudo q tá no body é string
  for(const chave in this.body){
   if (typeof this.body[chave] !== 'string'){
    this.body[chave] = '';
   }
  }
  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone
  }

  }
Contato.prototype.edit = async function(id){
 if(typeof id != "string") return;
 this.valida();
 if(this.errors.length > 0 )return;
 this.contato = await ContatoModel.findByIdAndUpdate(id,this.body, {new: true});
}

Contato.delete = async function(id){
  if(typeof id != "string") return;
  const contato = await ContatoModel.findOneAndDelete({_id: id});
  return contato;
}


module.exports = Contato;
