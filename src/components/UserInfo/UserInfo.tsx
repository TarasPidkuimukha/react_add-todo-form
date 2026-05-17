import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <div className="UserInfo">{user.name}</div>
    <a href={`mailto:${user.email}`}>{user.email}</a>
  </div>
);
