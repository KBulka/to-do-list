const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, default: 'Active' }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
