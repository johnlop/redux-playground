/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link as a } from "react-dom";
import { useUserActions } from "../../hooks/commands/useUserActions";
import { useUsersSelectors } from "../../hooks/selectors/useUsersSelectors";

const Users = () => {
  const { fetchAllUsers } = useUserActions();
  const { users } = useUsersSelectors();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => fetchAllUsers()}>Reload</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a key={user.id} href={"/user/" + user.id}>
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
