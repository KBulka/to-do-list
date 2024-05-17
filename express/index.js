const express = require ("express")
const app = express()
const mongoose = require ("mongoose")
const cors = require('cors')
const todos = require("./models/todo")

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/todo")
.then (()=> {
    console.log("Polączono do bazy danych")
})
.catch (()=> {
    console.log("nie udało się podłączyć do ")
})

app.get("/get",(req,res)=>{
    todos.find({})
    .then((data)=>{res.send(data)})
    .catch((err)=>{res.send(err)})
}) 

app.post("/add",(req,res)=>{
    const newtodo = new todos({
        task: req.body.task,
        status: req.body.status,
        category: req.body.category
    });
    newtodo.save()
    .then(() => res.send("Zapisano"))
    .catch((err) => res.send("problem jes"));
}) 

app.delete("/delete/:id",(req,res)=>{
    const todoId = req.params.id;
    
    todos.findByIdAndDelete(todoId)
    .then((result) => {
            if (result) {
                res.send("Usunięto z sukcessem");
            } else {
                res.status(404).send("Nie znaleziono zadania do usunięcia");
            }
        })
        .catch((err) => {
            console.error("Błąd podczas usuwania:", err);
            res.status(500).send("Problem przy usuwaniu");
        });
})

app.listen(3001)
