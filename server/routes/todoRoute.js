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
    res.json(todoList);
})

TodoRoute.get("/:id", function (req, res) {
    let id = req.params.id;
    res.json(todoList[id]);
})

TodoRoute.post("/", function (req, res) {
    //call to db
    let {todoText,completed} = req.body;
    todoList.push({todoText,completed});
    res.json(todoList);
})

TodoRoute.put("/:id",function(req,res){
    let id = req.params.id;
    todoList[id].completed = !todoList[id].completed;
    res.json(todoList);
})

TodoRoute.delete("/:id",function(req,res){
    let id = req.params.id;
    //delete todoList[id];
    todoList = todoList.filter((todo,key) => {
        return key != id;
    })
    res.json(todoList);
})


module.exports = TodoRoute;