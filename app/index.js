import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './config/configureStore.js';
import App from './containers/App.js';

const store = configureStore();

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}