import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
