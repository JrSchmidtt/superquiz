const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.TEXT
    }
});

Pergunta.sync({force: false}).then(() =>{
    console.log('Banco de dados: Tabela Pergunta syncronizada');
})

module.exports = Pergunta;