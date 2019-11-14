export const flow = store => next => action => {
  if (Array.isArray(action)) {
    return action.forEach(act => store.dispatch(act));
  } else next(action);
};
