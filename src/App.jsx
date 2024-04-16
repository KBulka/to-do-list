import { useState } from 'react'
import TodoSearch from './component/TodoSearch'
import TodoFilter from './component/TodoFilter'
import TodoList from './component/Todolist'

function App() {

  let[todos,setTodos] = useState ([
    {id: 0, task: "Kup drzewo", status: "Active"},
    {id: 1, task: " Znajdź łanie", status: "Active"},
    {id: 2, task: "Pościel pustynie", status: "Active"}
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
    <TodoFilter />
    <TodoList todos ={todos} delete_todo = {deleteTodo}/>
  </div>
  )
}
export default App
