

console.log(usuario, senha)

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'mysql742.umbler.com',  
        user : 'testapi',      
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