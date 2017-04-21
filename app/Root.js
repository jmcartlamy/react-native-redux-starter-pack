import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './config/configureStore.js';
import App from './components/container/App.js';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}