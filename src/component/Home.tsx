import React from 'react'
import TodoSearch from './TodoSearch';
import TodoListDaily from './TodoListDaily';
import TodoListOnetime from './TodoListOnetime';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { setTodos, addTodo, deleteTodo } from './redux/todosSlice';
import { Todo } from './redux/types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () =>
    {

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
        const newTodo: Partial<Todo> = {
          task: data.task,
          category: data.category,
          status: "Active"
        };
    
        axios.post("http://localhost:3001/add", newTodo)
          .then((response) => {
            const addedTodo: Todo = response.data; // Make sure the response contains the new todo with the `_id`
            dispatch(addTodo(addedTodo));
            console.log(addedTodo);
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


        return(
            <div className="todo-container">
            <TodoSearch add_todo={addNewTodo} />
            <div className="todo-list-content">
              <TodoListDaily todos={todos} delete_todo={removeTodo} />
              <TodoListOnetime todos={todos} delete_todo={removeTodo} />
            </div>
            <Link to="/about"><div className='foot'>O projekcie</div></Link>

          </div>
        )
    }
    export default Home;