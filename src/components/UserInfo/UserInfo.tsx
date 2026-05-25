import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <a
      className='UserInfo'
      href={`mailto:${user.email}`}>
      {user.email}
    </a>
    <span className="user-name">{user.name}</span>
  </div>
);
