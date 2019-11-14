import { combineReducers } from "redux";
import { uiReducer } from "./ui";
import { usersReducer, userReducer } from "./users";
import { albumsReducer, userAlbumsReducer } from "./albums";

export const appReducer = combineReducers({
  ui: uiReducer,
  users: usersReducer,
  user: userReducer,
  albums: albumsReducer,
  userAlbums: userAlbumsReducer
});
