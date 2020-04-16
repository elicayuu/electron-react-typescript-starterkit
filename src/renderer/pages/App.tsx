import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../globalStyle'

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

const Title = styled.h1`
  color: var(--primary);
  font-weight: normal;
`

const Content = styled.div`
  color: var(--secondary);
`
