import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons';


const TodoListDaily = ({ todos, delete_todo }) => {
  return (
    <div className="todo-list">
        <h4>Zadania Codzienne</h4>
      {todos.map((todo) =>
        todo.category === 'daily' ? (
          <div className="task" key={todo._id}>
                         <Form.Check/>
            {todo.task}
            <Button variant="outline-danger" className="delete" onClick={() => delete_todo(todo._id)}>
            <CIcon icon={cilTrash} className="text-danger"  /> 
            </Button>
          </div>
        ) : null
      )}
    </div>
  )
}

export default TodoListDaily
