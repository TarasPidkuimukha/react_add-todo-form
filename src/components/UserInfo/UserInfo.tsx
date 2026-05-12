import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

type Props = {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name">{user.name}</p>
    <a
      className="UserInfo__email"
      href={`mailto:${user.email}`}>
        {user.email}
      </a>
  </div>
);
