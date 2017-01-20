import React, { Component } from 'react';

import styles from '../styles.js';
import { Text } from 'react-native';

class ExampleComponent extends Component {

  render() {
    return (
      <Text style={styles.instructions}>
        To get started, edit app/index.js
      </Text>
    )
  }
}

export default ExampleComponent