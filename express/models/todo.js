const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
    status: String,
    category: String
})

const todos = mongoose.model('todos', todoSchema);

module.exports = todos;