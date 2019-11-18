import { useDispatch, useStore } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setUsers, setUser, updateUser } from "../../store/actions/users";

export function useUserActions() {
  const dispatch = useDispatch();
  const { getState } = useStore();

  const fetchAllUsers = (force = false) => {
    const { users } = getState();
    if (force || !users.collection) {
      dispatch(
        apiRequest({
          url: "/users",
          method: "GET",
          onSuccess: onLoadUsersSuccess
        })
      );
    }
  };

  const fetchUser = id => {
    dispatch(
      apiRequest({
        url: "/users/" + id,
        method: "GET",
        onSuccess: onLoadUserSuccess
      })
    );
  };

  const onLoadUsersSuccess = users => {
    dispatch(setUsers(users));
  };

  const onLoadUserSuccess = user => {
    dispatch(setUser(user));
  };

  const changeUser = id => {
    dispatch(updateUser(id));
  };

  return {
    fetchAllUsers,
    fetchUser,
    changeUser
  };
}
