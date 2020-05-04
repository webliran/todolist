const server = require('express');
const TodoRoute = server.Router();
const TodoModel = require('../models/TodoModel');

let todoList = [
    {
        todoText: "לקנות ביצים",
        completed: true
    },
    {
        todoText: "להכין חביתה",
        completed: false
    },
    {
        todoText: "לנקות כלים",
        completed: false
    }
];

TodoRoute.get("/", async function (req, res) {
    let todoList = await TodoModel.find({});
    res.status(200).json(todoList);
})

TodoRoute.get("/:id", async function (req, res) {
    let id = req.params.id;
    let currentTodo = await TodoModel.findOne({_id: id});
    res.status(200).json(currentTodo);
})

TodoRoute.post("/", async function (req, res) {
    
    let newTodoModule = new TodoModel(req.body);
    let newTodo = await newTodoModule.save();

    res.status(200).json(newTodo);
})

TodoRoute.put("/:id",async function(req,res){
    let id = req.params.id;
    try{
        let toUpdateTodo = await TodoModel.findOne({_id: id});

        let updatedTodo = await TodoModel.updateOne({_id:id},{ 
           $set: {
                completed : !toUpdateTodo.completed
           } 
        })
        res.status(200).json(todoList);
    } catch(err){
        res.status(500).json({err:err})
    }
   
    
})

TodoRoute.delete("/:id",async function(req,res){
    let id = req.params.id;
    let deletedTodo = await TodoModel.remove({_id:id})
    res.status(200).json(deletedTodo);
})


module.exports = TodoRoute;
