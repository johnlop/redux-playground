import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setAlbums, setUserAlbums } from "../../store/actions/albums";

export function useAlbumActions() {
  const dispatch = useDispatch();

  const fetchAllAlbums = () => {
    dispatch(
      apiRequest({
        url: "/albums",
        method: "GET",
        onSuccess: onLoadAlbumsSuccess
      })
    );
  };

  const fetchUserAlbums = id => {
    dispatch(
      apiRequest({
        url: "/albums?userId=" + id,
        method: "GET",
        onSuccess: onLoadUserAlbumsSuccess
      })
    );
  };

  const onLoadAlbumsSuccess = albums => {
    dispatch(setAlbums(albums));
  };

  const onLoadUserAlbumsSuccess = albums => {
    dispatch(setUserAlbums(albums));
  };

  return {
    fetchAllAlbums,
    fetchUserAlbums
  };
}
