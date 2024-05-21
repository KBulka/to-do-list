import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './component/redux/store';
import { setTodos, addTodo, deleteTodo } from './component/redux/todosSlice';
import TodoSearch from './component/TodoSearch';
import TodoListDaily from './component/TodoListDaily';
import TodoListOnetime from './component/TodoListOnetime';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { Todo } from './component/redux/types';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    axios.get("http://localhost:3001/get")
      .then((response) => {
        const data: Todo[] = response.data;
        dispatch(setTodos(data));
        console.log(data);
      });
  }, [dispatch]);

  const addNewTodo = (data: { task: string; category: string }) => {
    const newTodo: Todo = {
      task: data.task,
      category: data.category,
      status: "Active"
    };

    axios.post("http://localhost:3001/add", newTodo)
      .then((response) => {
        console.log(response);
        dispatch(addTodo(newTodo));
      });
    console.log(data);
  };

  const removeTodo = (_id: string) => {
    if (!_id) {
      console.error("ID is not defined");
      return;
    }

    axios.delete(`http://localhost:3001/delete/${_id}`)
      .then((response) => {
        console.log(response);
        dispatch(deleteTodo(_id));
      })
      .catch((error) => {
        console.error("There was an error deleting the todo!", error);
      });
  };

  return (
    <div>
      <div className="todo-container">
        <TodoSearch add_todo={addNewTodo} />
        <div className="todo-list-content">
          <TodoListDaily todos={todos} delete_todo={removeTodo} />
          <TodoListOnetime todos={todos} delete_todo={removeTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
