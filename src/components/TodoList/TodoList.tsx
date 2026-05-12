import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
}

type Props = {
  todos: Todo[];
  users: User[];
}

export const TodoList: React.FC<Props> = ({ todos = [], users = [] }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
        user={users.find(u => u.id === todo.userId) || null}
      />
    ))}
  </section>
);
