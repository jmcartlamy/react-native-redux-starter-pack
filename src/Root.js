import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore.js';
import App from './app/components/presentational/App.js';

const store = configureStore();

export default class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}