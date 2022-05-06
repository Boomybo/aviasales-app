import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import sortButton from './sortButton';
import error from './error';
import receiveId from './receiveId';
import receiveTickets from './receiveTickets';
import visibleTickets from './visibleTickets';
import loader from './loader';

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
