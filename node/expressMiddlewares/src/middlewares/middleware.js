exports.MiddlewareGlobal = (req, res, next) => {
if(req.body.cliente){
    req.body.cliente = req.body.cliente.replace('ocelot', 'post'); // so muda o texto msm
}
    next()
}