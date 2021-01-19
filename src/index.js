
const express = require('express')
const router = require('./routes/routes')

const app = express();
app.use(express.json())
app.use(router)



app.listen(3000, () => {
    console.log('Executando back-end na porta 4000')
})

app.get('/', (request, response) =>{
    response.send('Hello word...')
})