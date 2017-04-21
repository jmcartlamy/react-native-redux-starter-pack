import React, { Component } from 'react';

import ExampleComponent from '../components/ExampleComponent.js';
import styled from 'styled-components/native';

/*
  Example with reducer / action :

  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';
  import * as exampleActions from '../actions/exampleActions.js';
 */

/*
  Styled-components
  */

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const WelcomeText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
`;

const InstructionsText = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 6;
`;

class App extends Component {
  render() {

    /*
      Check your props :
      this.props.actions.userInput(value);
     */

    return (
      <Container>
        <WelcomeText>
          Welcome to React Native !
        </WelcomeText>
        <ExampleComponent />
        <InstructionsText>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </InstructionsText>
      </Container>
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