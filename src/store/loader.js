function loader(state = null, action) {
  switch (action.type) {
    case 'LOADER':
      return action.loader;
    default:
      return state;
  }
}

export default loader;
