require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// para esconder o usuario e senha usa-se o .env e faz que nem o processo abaixo no mongoose.connect
mongoose.connect(process.env.CONNECTIONSTRING /**, {useNewUrlParser: true, useUnifiedTopology: true} */)
.then(() => {
    console.log('MongoDB conectado.')
    app.emit('Mongo conectado')
})
.catch((error,req,res,next) => {
    res.render(error)
});

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes')
const path = require('path');
const helmet = require('helmet'); 
const csrf = require('csurf');
const { MiddlewareGlobal, checkCrsfError, crsfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet()) // irei comentar isso pois pode dar erro no localhost, porem em servidores normais é bom utilizar
// para a seguranca do sistema
app.use(express.urlencoded({extended: true})); // para poder transformar em objeto as requisicoes do body
app.use(express.static(path.resolve(__dirname, 'public'))); // define os estaticos da pagina
const sessionOptions = session({
    secret: 'afd275de276d0091de17bcead75f37', // random mesmo
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true

    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // setando a pasta de views
app.set('view engine', 'ejs'); // setando a view engine 

app.use(csrf());

//nossos proprios middlewares
app.use(MiddlewareGlobal);
app.use(checkCrsfError)
app.use(crsfMiddleware)
app.use(routes);

app.on('Mongo conectado', () => {
    app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    })
})