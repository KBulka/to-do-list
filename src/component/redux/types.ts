export interface Todo {
  _id?: string;
  task: string;
  category: string;
  status: string;
}

export interface TodoState {
  todos: Todo[];
}

