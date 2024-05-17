import { useEffect, useState } from 'react'
import TodoSearch from './component/TodoSearch'
import TodoListDaily from './component/TodoListDaily'
import TodoListOnetime from './component/TodoListOnetime'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  let[todos,setTodos] = useState ([]) 
  useEffect(() => {
    axios.get("http://localhost:3001/get")
    .then((message)=>{
      const data =  message.data
      setTodos(data)
      console.log(data)
    })}, []);

  const addTodo = (data) => {
    axios.post("http://localhost:3001/add",{
      task: data.task,
      category: data.category,
      status: "Active"
    })
    .then((message)=> {
      console.log(message)
      setTodos([...todos, data]);
    })
    console.log(data)
  }

  const deleteTodo = (_id) => {
    if (!_id) { console.error ("nie zdefinowano id")}

    axios.delete(`http://localhost:3001/delete/${_id}`)
    .then((message)=>{
      console.log(message)
    })
    .catch((error) => {
      console.error("There was an error deleting the todo!", error);
    });
  }

  return (
  <div className="todo-container">
    <TodoSearch add_todo = {addTodo}/>
    <div className="todo-list-content">
       <TodoListDaily todos = {todos} delete_todo = {deleteTodo}/>
       <TodoListOnetime todos ={todos} delete_todo = {deleteTodo}/>
    </div>
  </div>
  )
}
export default App
