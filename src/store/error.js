function error(state = false, action) {
  switch (action.type) {
    case 'RECEIVE_ERROR':
      return (state = action.err);
    default:
      return state;
  }
}

export default error;
