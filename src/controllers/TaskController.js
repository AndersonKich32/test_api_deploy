const database = require('../database/connection')

class TaskController{

   novatarefa(request, response){
    const { tarefa, descricao, responsavel } = request.body

    console.log(tarefa, descricao, responsavel)

    database.insert({tarefa, descricao, responsavel}).table("tasks").then(data=>{
        response.json({message:"Tarefa criada com sucesso !"})
    }).catch(error=>{
        console.log(error)
    })

   }

}
module.exports = new TaskController()