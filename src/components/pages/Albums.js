/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAlbumActions } from "../../hooks/commands/useAlbumActions";
import { useAlbumsSelectors } from "../../hooks/selectors/useAlbumsSelectors";

const Albums = () => {
  const { fetchAllAlbums } = useAlbumActions();
  const { albums } = useAlbumsSelectors();

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div>
      <h2>Albums</h2>
      <button onClick={() => fetchAllAlbums()}>Reload</button>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title} (<Link to={"/user/" + album.userId}>user</Link>)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
