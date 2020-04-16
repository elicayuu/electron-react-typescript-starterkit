import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  font-family: sans-serif;
  
  :root {
    --primary: #00b8d8;
    --secondary: #5a6169;
  }
`
