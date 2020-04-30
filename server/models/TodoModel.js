const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TodoSchema = new Schema({
    todoText: String,
    completed: Boolean,
});

let TodoModel = mongoose.model('TodoModel',TodoSchema,'todos');

module.exports = TodoModel;