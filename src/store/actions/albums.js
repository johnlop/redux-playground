export const SET_ALBUMS = "SET_ALBUMS";
export const SET_USER_ALBUMS = "SET_USER_ALBUMS";
export const UPDATE_ALBUMS = "UPDATE_ALBUMS";
export const RESET_ALBUMS = "RESET_ALBUMS";

export function setAlbums(albums = []) {
  return {
    type: SET_ALBUMS,
    albums,
    meta: {
      log: "Replace album collection"
    }
  };
}

export function setUserAlbums(userAlbums = []) {
  return {
    type: SET_USER_ALBUMS,
    userAlbums,
    meta: {
      log: "Replace album collection"
    }
  };
}
