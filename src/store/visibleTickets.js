function visibleTickets(state = [], action) {
  switch (action.type) {
    case 'VISIBLE_TICKETS':
      return [...state, ...action.visibleTickets];
    default:
      return state;
  }
}

export default visibleTickets;
