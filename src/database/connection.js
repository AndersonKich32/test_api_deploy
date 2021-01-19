require('dotenv').config()

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'mysql669.umbler.com',  
        user : process.env.USER,      
        password : process.env.PASSWORD,  
        database : process.env.DATABASE       
     }
});
module.exports = knex




/*
const { response } = require('express');

require('dotenv').config()

const usuario = process.env.USER
const senha = process.env.PASSWORD
*/