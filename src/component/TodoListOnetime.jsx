import React from 'react'

const TodoListOnetime = ({ todos, delete_todo }) => {
  return (
    <div className="todo-list">
        Zadania Jednorazowe
      {todos.map((todo) =>
        todo.category === 'onetime' ? (
          <div className="task" key={todo.id}>
            <input type="checkbox" />
            {todo.task}
            <button className="delete" onClick={() => delete_todo(todo.id)}>
              X
            </button>
          </div>
        ) : null
      )}
    </div>
  )
}

export default TodoListOnetime
