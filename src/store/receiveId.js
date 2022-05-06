function receiveId(state = null, action) {
  switch (action.type) {
    case 'RECEIVE_ID':
      return (state = action.id);
    default:
      return state;
  }
}

export default receiveId;
