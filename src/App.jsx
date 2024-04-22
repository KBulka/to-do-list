import { useState } from 'react'
import TodoSearch from './component/TodoSearch'
import TodoListDaily from './component/TodoListDaily'
import TodoListOnetime from './component/TodoListOnetime'

function App() {

  let[todos,setTodos] = useState ([
    {id: 0, task: "Kup drzewo", status: "Active", category: "onetime"},
    {id: 1, task: " Znajdź łanie", status: "Active", category: "onetime"},
    {id: 2, task: "Pościel pustynie", status: "Active", category: "daily"}
  ])

  const addTodo = (data) => {
    setTodos([...todos, data={...data,id: parseInt(todos[todos.length-1].id) + 1, status:"Active"}])
    console.log(data)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
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
