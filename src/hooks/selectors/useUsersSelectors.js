import { useSelector } from "react-redux";

export function useUsersSelectors(id) {
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.user);

  return { users, user };
}
