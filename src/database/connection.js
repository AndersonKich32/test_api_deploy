

console.log(usuario, senha)

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',  
        user : 'root',      
        password : '97408469Bdc',  
        database : 'apitest',
        multiStatements: true      
     }
});
module.exports = knex




/*
const { response } = require('express');

require('dotenv').config()

const usuario = process.env.USER
const senha = process.env.PASSWORD
*/