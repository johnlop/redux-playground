import { combineReducers } from "redux";
import { uiReducer } from "./ui";
import { usersReducer } from "./users";
import { albumsReducer, userAlbumsReducer } from "./albums";

export const appReducer = combineReducers({
  ui: uiReducer,
  users: usersReducer,
  albums: albumsReducer,
  userAlbums: userAlbumsReducer
});
