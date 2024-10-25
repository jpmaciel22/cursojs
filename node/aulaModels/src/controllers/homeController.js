// HomeModel.create({
//     titulo: 'The creator has a master plan',
//     descricao: 'Música'
// })


exports.PaginaInicial = (req,res,next) => {
    console.log(req.session.usuario);
    res.render('index', {
        titulo: 'Oi tudo bem?',
        numeros: [1,2,3,4,5,6,7,8,9,0]
    }); // nao precisa da extensao .ejs no final pois ele ja sabe q e
    return; 
}

exports.trataPost = (req,res, next) => {
    res.send(req.body)
    return;
}
