import { SET_ALBUMS, SET_USER_ALBUMS } from "../actions/albums";

export function albumsReducer(albums = [], action) {
  if (action.type === SET_ALBUMS) return action.albums;
  return albums;
}

export function userAlbumsReducer(albums = [], action) {
  if (action.type === SET_USER_ALBUMS) return action.userAlbums;
  return albums;
}
