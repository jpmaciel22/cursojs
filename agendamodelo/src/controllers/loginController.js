const Login = require('../models/LoginModel');

exports.index = (req,res,next) => {
    res.render('login');
}
exports.register = (req,res,next) => {
    const login = new Login(req.body)
    login.register();
    res.send(login.errors)
}