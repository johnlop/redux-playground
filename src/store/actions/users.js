export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";

export function setUsers(users = []) {
  return {
    type: SET_USERS,
    users,
    meta: {
      log: "Replace users with new users"
    }
  };
}

export function setUser(user = {}) {
  return {
    type: SET_USER,
    user,
    meta: {
      log: "Replace user with new user"
    }
  };
}

export function updateUser(id) {
  return {
    type: UPDATE_USER,
    id,
    meta: {
      log: "Update user"
    }
  };
}
