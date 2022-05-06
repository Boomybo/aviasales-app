import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '../src/components/App';

import rootReducer from './store/reducer';
import { requestId } from './actions/actions';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const res = next(action);
  console.log('Middleware', store.getState());
  return res;
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

store.dispatch(requestId());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
