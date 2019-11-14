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
  const { user } = useUsersSelectors();
  const { userAlbums } = useAlbumsSelectors();

  useEffect(() => {
    fetchUser(id);
    fetchUserAlbums(id);
  }, []);

  return (
    <div>
      <h2>
        {id} - {user.name}
      </h2>
      {user.email}

      <h2>Albums</h2>
      <ul>
        {userAlbums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
