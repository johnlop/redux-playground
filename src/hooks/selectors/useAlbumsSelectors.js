import { useSelector } from "react-redux";
import { useMemo } from "react";

export function useAlbumsSelectors() {
  const albums = useSelector(state => state.albums);

  const userAlbums = useSelector(state => state.userAlbums);

  const minAlbums = useMemo(() => {
    return albums.map(album => ({ id: album.id, name: album.name }));
  }, [albums]);

  return { albums, minAlbums, userAlbums };
}
