exports.PaginaInicial = (req,res) => {
    res.render('index'); // nao precisa da extensao .ejs no final pois ele ja sabe q e 
}

exports.trataPost = (req,res) => {
    res.send('NOVA ROTA DO POST')
}