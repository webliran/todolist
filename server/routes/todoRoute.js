const server = require('express');
const TodoRoute = server.Router();

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

TodoRoute.get("/", function (req, res) {
    
    res.json(todoList);
})

TodoRoute.get("/:id", function (req, res) {
    let id = req.params.id;
    res.json(todoList[id]);
})

TodoRoute.post("/", function (req, res) {
    //call to db
    let {todoText,completed} = req.body;
    todoList.push({todoText,completed})
    res.json(todoList);
})

TodoRoute.put("/:id",function(req,res){
    let id = req.params.id;
    todoList[id].completed = !todoList[id].completed;
    res.json(todoList[id]);
})

TodoRoute.delete("/:id",function(req,res){
    let id = req.params.id;
    //delete todoList[id];
    todoList = todoList.filter((todo,key) => {
        return key != id;
    })
    res.json({status:true,msg:`Todo #${id} has been deleted`});
})


module.exports = TodoRoute;