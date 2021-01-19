const { response } = require('express');

require('dotenv').config()

const usuario = process.env.USER
const senha = process.env.PASSWORD

console.log(usuario, senha)

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',  
        user : usuario,      
        password : senha,  
        database : 'todo'       
     }
});
module.exports = knex