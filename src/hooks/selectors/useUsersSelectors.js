import { useSelector } from "react-redux";

export function useUsersSelectors(id) {
  const users = useSelector(state => state.users.collection || []);
  const user = useSelector(state => state.users.map[id] || {});

  return { users, user };
}
