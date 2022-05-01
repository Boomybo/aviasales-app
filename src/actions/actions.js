const ADD_TRANSFER_FILTER = 'ADD_TRANSFER_FILTER';
const DELETE_TRANSFER_FILTER = 'DELETE_TRANSFER_FILTER';

export const allTransfers = (e) => {
  return {
    type: 'ALL_TRANSFERS',
    value: e.target.checked,
    name: e.target.name,
  };
};

export const addTransferFilter = (e) => {
  return {
    type: ADD_TRANSFER_FILTER,
    value: e.target.name,
    isChecked: false,
  };
};

export const deleteTransferFilter = (e) => ({ type: DELETE_TRANSFER_FILTER, value: e.target.name, isChecked: false });

export const setSortButton = (e) => {
  return {
    type: 'SET_SORT_BUTTON',
    value: e.target.name,
  };
};

export const allFilterChecked = () => ({ type: 'ALL_FILTER_CHECK', value: false });
export const checkAll = () => ({ type: 'CHECK_ALL' });

export const receiveId = (id) => ({ type: 'RECEIVE_ID', id });
export const getError = () => ({ type: 'RECEIVE_ERROR', err: true });

export const receivedTickets = (json) => {
  return {
    type: 'RECEIVED_TICKETS',
    json,
  };
};

export const setVisibleTickets = (visibleTickets) => {
  return {
    type: 'VISIBLE_TICKETS',
    visibleTickets,
  };
};

export const setLoader = (loader) => {
  return {
    type: 'LOADER',
    loader,
  };
};

export const fetchTickets = (id) => {
  return function (dispatch) {
    return fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receivedTickets(json.tickets));
        if (!json.stop) {
          dispatch(setLoader(json.stop));
          return setTimeout(() => {
            dispatch(fetchTickets(id));
          }, 300);
        }
        dispatch(setLoader(json.stop));
      })
      .catch((err) => {
        if (err instanceof SyntaxError) {
          return dispatch(fetchTickets(id));
        }
        return dispatch(getError());
      });
  };
};

export const requestId = () => {
  return function (dispatch) {
    return fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((json) => dispatch(receiveId(json.searchId)))
      .then((json) => dispatch(fetchTickets(json.id)))
      .catch(() => dispatch(getError()));
  };
};
