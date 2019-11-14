import { TOGGLE_LOADER } from "../actions/ui";

const initialState = {
  loading: false,
  selectedUser: null
};

export function uiReducer(ui = initialState, action) {
  if (action.type === TOGGLE_LOADER) return { ...ui, loading: action.visible };
  return ui;
}
