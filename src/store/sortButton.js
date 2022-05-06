function sortButton(state = null, action) {
  switch (action.type) {
    case 'SET_SORT_BUTTON':
      return (state = action.value);

    default:
      return state;
  }
}

export default sortButton;
