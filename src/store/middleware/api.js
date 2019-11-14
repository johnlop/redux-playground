import { API_REQUEST } from "../actions/api";
import { toggleLoader } from "../actions/ui";

const API_URL = "http://jsonplaceholder.typicode.com";

export const api = ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    dispatch(toggleLoader({ visible: true }));
    const { method, url, onSuccess } = action.meta;
    fetch(API_URL + url, { method })
      .then(result => result.json())
      .then(response => {
        onSuccess(response);
        dispatch(toggleLoader({ visible: false }));
      });
  }
};
