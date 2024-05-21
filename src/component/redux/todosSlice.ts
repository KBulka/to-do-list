import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo._id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
