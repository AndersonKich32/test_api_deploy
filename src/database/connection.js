

console.log(usuario, senha)

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'mysql669.umbler.com',  
        user : 'test_api',      
        password : '97408469',  
        database : 'todo'       
     }
});
module.exports = knex




/*
const { response } = require('express');

require('dotenv').config()

const usuario = process.env.USER
const senha = process.env.PASSWORD
*/