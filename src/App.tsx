import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { useState } from 'react';
import { TodoList } from './components/TodoList';

export const App = () => {
  const [todos, setTodo] = useState(todosFromServer);
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState<number | ''>('');
  const [titleError, setTitleError] = useState(false);
  const [userError, setUserError] = useState(false);


  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !userId) {
      setTitleError(!title);
      setUserError(!userId);
      return;
    }

    const newTodo = {
      id: Math.max(...todos.map(t => t.id)) + 1,
      title,
      completed: false,
      userId:Number(userId),
    }
    setTodo([...todos, newTodo]);
    setTitle('');
    setUserId('');

    setTitleError(false);
    setUserError(false);
  }

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <form
        action="/api/todos"
        method="POST"
        onSubmit={handleAdd}
        >
        <div className="field">
          <input
          type="text"
          data-cy="titleInput"
          value={title}
          placeholder="Enter todo title"
          onChange={(event) => {
            setTitle(event.target.value);
            setTitleError(false);
          }}
          />
          {titleError && <span className="error">Please enter a title</span>}
        </div>

        <div className="field">
          <select
            data-cy="userSelect"
            value={userId}
            onChange={(event) => {
              setUserId(Number(event.target.value));
              setUserError(false);
            }}
            >
            <option value="" disabled>
              Choose a user
            </option>
            {usersFromServer.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
            {userError && <span className='error'>Please choose a user</span>}
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>
      <TodoList todos={todos} users={usersFromServer} />
    </div>
  );
};
