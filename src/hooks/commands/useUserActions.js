import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setUsers, setUser } from "../../store/actions/users";

export function useUserActions() {
  const dispatch = useDispatch();

  const fetchAllUsers = () => {
    dispatch(
      apiRequest({
        url: "/users",
        method: "GET",
        onSuccess: onLoadUsersSuccess
      })
    );
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

  return {
    fetchAllUsers,
    fetchUser
  };
}
