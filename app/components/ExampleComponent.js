import React, { Component } from 'react';
import styled from 'styled-components/native';

const GetStartedText = styled.Text`
  font-weight: 700;
  margin-bottom: 15;
`;

class ExampleComponent extends Component {

  render() {
    return (
      <GetStartedText>
        To get started, edit app/index.js
      </GetStartedText>
    )
  }
}

export default ExampleComponent