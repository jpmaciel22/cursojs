exports.PaginaInicial = (req,res) => {
    res.send(`<form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`)
}

exports.trataPost = (req,res) => {
    res.send('NOVA ROTA DO POST')
}