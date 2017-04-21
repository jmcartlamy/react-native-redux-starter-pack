import React, { Component } from 'react';

import ExampleComponent from '../components/ExampleComponent.js'
import { Text, View } from 'react-native';

import styles from '../styles.js';

/*
  Example with reducer / action :

  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';
  import * as exampleActions from '../actions/exampleActions.js';
 */

class App extends Component {
  render() {

    /*
      Check your props :
      this.props.actions.userInput(value);
     */

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native !
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

/*
  Connect your reducer and add state & dispatch in your props :

  const mapStateToProps = (state) => {
    return {
      userInput: state.userInputReducer
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(exampleActions, dispatch)
    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
 */

export default App;