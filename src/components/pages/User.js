/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useUserActions } from "../../hooks/commands/useUserActions";
import { useUsersSelectors } from "../../hooks/selectors/useUsersSelectors";
import { useAlbumActions } from "../../hooks/commands/useAlbumActions";
import { useAlbumsSelectors } from "../../hooks/selectors/useAlbumsSelectors";

const User = ({ match }) => {
  const { id } = match.params;
  const { fetchUser } = useUserActions();
  const { fetchUserAlbums } = useAlbumActions();
  const { user } = useUsersSelectors(id);
  const { userAlbums } = useAlbumsSelectors();

  useEffect(() => {
    fetchUser(id);
    fetchUserAlbums(id);
  }, []);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h3>Albums</h3>
      <ul>
        {userAlbums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
