/*
  Presentational folder contains "dumb" components
 */

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
        To get started, check app/Root.js
      </GetStartedText>
    )
  }
}

export default ExampleComponent