import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';



const TodoListOnetime = ({ todos, delete_todo }) => {
  return (
    <div className="todo-list">
        Zadania Jednorazowe
      {todos.map((todo) =>
        todo.category === 'onetime' ? (
          <div className="task" key={todo.id}>
             <Form.Check/>
             
            {todo.task}
            <Button variant="outline-danger" className="delete" onClick={() => delete_todo(todo.id)}>
              X
            </Button>
          </div>
        ) : null
      )}
    </div>
  )
}

export default TodoListOnetime
