import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

/*
 Creates a Redux store that holds the complete state tree of your app.
 There should only be a single store in your app.
 http://redux.js.org/docs/api/createStore.html

 Ex: import rootReducer from '../reducers';
 */

const reducer = () => {};
const preloadedState = {};
const middleWares = [thunk];

/* Redux DevTools */
const getStoreEnhancers = () => {
  const composeEnhancers = composeWithDevTools({ realtime: true });
  return composeEnhancers(applyMiddleware(...middleWares));
};

export default () => {
  return createStore(reducer, preloadedState, getStoreEnhancers());
}