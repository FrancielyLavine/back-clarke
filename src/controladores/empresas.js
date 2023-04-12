const knex = require('../../conexao');


const listarFornecedores = async(req, res) => {
    const distribuidoras = await knex('distribuidoras')
    res.json(distribuidoras)
}

module.exports = {
    listarFornecedores
}