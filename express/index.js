const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Todo = require("./models/todo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb+srv://admin:proste123@todo.fwrhgri.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

app.get("/get", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error });
  }
});

app.post('/add', async (req, res) => {
  const newTodo = new Todo({
    task: req.body.task,
    category: req.body.category,
    status: "Active",
  });

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ message: "Error adding todo", error: err });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const todoId = req.params.id;

  try {
    const result = await Todo.findByIdAndDelete(todoId);
    if (result) {
      res.json({ message: "Todo successfully deleted" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).json({ message: "Error deleting todo", error: err });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
