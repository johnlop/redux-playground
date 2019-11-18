import { SET_USERS, SET_USER } from "../actions/users";

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
  return users;
}
