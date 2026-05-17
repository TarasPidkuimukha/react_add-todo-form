import React from 'react';
import { UserInfo } from '../UserInfo';

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
  todo: Todo;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({ todo, user }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    data-id={todo.id}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {user && <UserInfo user={user} />}
  </article>
);
