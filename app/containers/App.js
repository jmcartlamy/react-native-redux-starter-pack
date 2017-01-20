import React, { Component } from 'react';

import ExampleComponent from '../components/ExampleComponent.js'
import { Text, View } from 'react-native';

import styles from '../styles.js';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Scrum Timer Native!
        </Text>
        <ExampleComponent />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}