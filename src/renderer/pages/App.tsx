import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Title>Hello, Electron!</Title>

      <Content>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</Content>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  ${normalize()}
`

const Title = styled.h1`
  color: #f33;
  font-weight: normal;
`

const Content = styled.div`
  color: #393;
`
