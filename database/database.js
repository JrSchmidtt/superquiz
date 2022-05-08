const sequelize = require('sequelize');
const connection = new sequelize('superquiz','root','senha',{
    host:'localhost',
    dialect: 'mysql'
})
module.exports = connection;