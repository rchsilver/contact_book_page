import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Reset } from './style/Reset.ts'
import { GlobalStyle } from './style/GlobalStyled.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)