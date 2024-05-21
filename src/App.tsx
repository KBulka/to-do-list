import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './component/redux/store';
import { increment, decrement } from './component/redux/actions';
import TodoSearch from './component/TodoSearch';
import TodoListDaily from './component/TodoListDaily';
import TodoListOnetime from './component/TodoListOnetime';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { Todo } from './component/redux/types'


const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch: AppDispatch = useDispatch();

  const [todos, setTodos] = useState<Todo[]>([]); 

  useEffect(() => {
    axios.get("http://localhost:3001/get")
      .then((response) => {
        const data: Todo[] = response.data;
        setTodos(data);
        console.log(data);
      });
  }, []);

  const addTodo = (data: { task: string; category: string }) => {
    const newTodo: Todo = {
      task: data.task,
      category: data.category,
      status: "Active"
    };

    axios.post("http://localhost:3001/add", newTodo)
      .then((response) => {
        console.log(response);
        setTodos([...todos, newTodo]);
      });
    console.log(data);
  };

  const deleteTodo = (_id: string) => {
    if (!_id) {
      console.error("ID is not defined");
      return;
    }

    axios.delete(`http://localhost:3001/delete/${_id}`)
      .then((response) => {
        console.log(response);
        setTodos(todos.filter(todo => todo._id !== _id));
      })
      .catch((error) => {
        console.error("There was an error deleting the todo!", error);
      });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div className="todo-container">
        <TodoSearch add_todo={addTodo} />
        <div className="todo-list-content">
          <TodoListDaily todos={todos} delete_todo={deleteTodo} />
          <TodoListOnetime todos={todos} delete_todo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
