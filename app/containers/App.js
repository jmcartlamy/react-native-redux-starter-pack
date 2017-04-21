import React, { Component } from 'react';

import ExampleComponent from '../components/ExampleComponent.js'
import { Text, View } from 'react-native';

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
      <View>
        <Text>
          Welcome to React Native !
        </Text>
        <ExampleComponent />
        <Text>
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

/*
 "container": {
 "flex": 1,
 "justifyContent": "center",
 "alignItems": "center",
 "backgroundColor": "#F5FCFF"
 },
 "welcome": {
 "fontSize": 20,
 "textAlign": "center",
 "margin": 10
 },
 "instructions": {
 "textAlign": "center",
 "color": "#333333",
 "marginBottom": 6
 }
 */