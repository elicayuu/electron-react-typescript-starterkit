import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  body {
    font-family: sans-serif;
  }
  
  :root {
    --primary: #00b8d8;
    --secondary: #5a6169;
  }
`
