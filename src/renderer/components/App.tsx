import React, { Component } from 'react'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello, Electron!</Title>

        <Content>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</Content>
      </div>
    )
  }
}

export default App

const Title = styled.h1`
  color: #f33;
  font-weight: normal;
`;

const Content = styled.div`
  color: #393;
`;