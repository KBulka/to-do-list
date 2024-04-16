import React from 'react'

const Todolist = ({todos, delete_todo}) => {
  return (

    <div className="todo-list">

      { todos.map( todo => 
        <div className="task" key={todo.id}>
          <input type='checkbox'/>
         {todo.task}
         <button className='delete' onClick={()=> delete_todo(todo.id)}>X</button>
        </div>)}

    </div>

  )
}

export default Todolist