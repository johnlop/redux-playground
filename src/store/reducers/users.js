import { SET_USERS, SET_USER, UPDATE_USER } from "../actions/users";

const defaultStore = {
  map: {}
};

export function usersReducer(users = defaultStore, action) {
  if (action.type === SET_USERS) {
    users.collection = action.users;
    users.map = {};
    action.users.forEach(user => {
      users.map[user.id] = user;
    });
    return users;
  }
  if (action.type === SET_USER) {
    users.map[action.user.id] = action.user;
    return users;
  }
  if (action.type === UPDATE_USER) {
    users.map[action.id] = {};
    return users;
  }
  return users;
}
