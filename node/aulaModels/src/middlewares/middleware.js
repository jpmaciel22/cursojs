exports.MiddlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variável'
    next()
}
exports.checkCrsfError = (err, req, res, next) => {
if(err && err.code == 'EBADCSRFTOKEN'){
    return res.send('BAD CSRF')
}
}
exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    // res.send(res.locals.csrfToken);
    next()
}