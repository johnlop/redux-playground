import { SET_USERS, SET_USER } from "../actions/users";

export function usersReducer(users = [], action) {
  if (action.type === SET_USERS) {
    const userMap = {};
    action.users.forEach(user => {
      userMap[user.id] = user;
    });
    // return userMap;
    return action.users;
  }
  return users;
}

export function userReducer(user = {}, action) {
  if (action.type === SET_USER) return action.user;
  return user;
}
