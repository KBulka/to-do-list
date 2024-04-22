import React from 'react'

const TodoListDaily = ({ todos, delete_todo }) => {
  return (
    <div className="todo-list">
        Zadania Codzienne
      {todos.map((todo) =>
        todo.category === 'daily' ? (
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

export default TodoListDaily
