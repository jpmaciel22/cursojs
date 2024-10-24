exports.PaginaInicial = (req,res,next) => {
    res.render('index'); // nao precisa da extensao .ejs no final pois ele ja sabe q e 
}

exports.trataPost = (req,res, next) => {
    res.send(req.body)
    return;
}