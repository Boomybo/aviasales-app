function receiveTickets(state = [], action) {
  switch (action.type) {
    case 'RECEIVED_TICKETS':
      return [...state, ...action.json];
    default:
      return state;
  }
}

export default receiveTickets;
