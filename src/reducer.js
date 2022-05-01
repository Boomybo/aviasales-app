import { combineReducers } from 'redux';
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

function sortButton(state = null, action) {
  switch (action.type) {
    case 'SET_SORT_BUTTON':
      return (state = action.value);

    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case 'RECEIVE_ERROR':
      return (state = action.err);
    default:
      return state;
  }
}

function receiveId(state = null, action) {
  switch (action.type) {
    case 'RECEIVE_ID':
      return (state = action.id);
    default:
      return state;
  }
}

function receiveTickets(state = [], action) {
  switch (action.type) {
    case 'RECEIVED_TICKETS':
      return [...state, ...action.json];
    default:
      return state;
  }
}

function visibleTickets(state = [], action) {
  switch (action.type) {
    case 'VISIBLE_TICKETS':
      return [...state, ...action.visibleTickets];
    default:
      return state;
  }
}

function loader(state = null, action) {
  switch (action.type) {
    case 'LOADER':
      return action.loader;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  filterReducer,
  sortButton,
  error,
  receiveId,
  receiveTickets,
  visibleTickets,
  loader,
});

export default rootReducer;
