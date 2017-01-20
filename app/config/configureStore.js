import { createStore } from 'redux';

/*
 Creates a Redux store that holds the complete state tree of your app.
 There should only be a single store in your app.
 http://redux.js.org/docs/api/createStore.html

 Ex: import rootReducer from '../reducers';
 */

const reducer = () => {};
const preloadedState = {};

export default () => {
  return createStore(reducer, preloadedState);
}