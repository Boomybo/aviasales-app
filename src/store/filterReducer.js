const initialState = {
  allCheck: true,
  filters: [
    {
      value: 'without-tranfers',
      isChecked: true,
    },
    {
      value: 'one-transfer',
      isChecked: true,
    },
    {
      value: 'two-transfer',
      isChecked: true,
    },
    {
      value: 'three-transfer',
      isChecked: true,
    },
  ],
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRANSFER_FILTER':
      return {
        ...state,
        filters: state.filters.map((val) => {
          if (val.value === action.value) {
            return { ...val, isChecked: true };
          } else {
            return { ...val };
          }
        }),
      };
    case 'DELETE_TRANSFER_FILTER':
      return {
        ...state,
        filters: state.filters.map((val) => {
          if (val.value === action.value) {
            return { ...val, isChecked: false };
          }
          return { ...val };
        }),
        allCheck: false,
      };
    case 'ALL_FILTER_CHECK':
      return {
        ...state,
        allCheck: !state.allCheck,
        filters: state.filters.map((val) => {
          return { ...val, isChecked: !state.allCheck };
        }),
      };
    case 'CHECK_ALL':
      if (state.filters.filter((val) => val.isChecked).length >= 3) {
        return {
          ...state,
          allCheck: true,
        };
      }
      return state;
    default:
      return state;
  }
}

export default filterReducer;
