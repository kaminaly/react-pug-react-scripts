import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return pug`
    .App
      header.App-header
        img.App-logo(src=logo alt="logo")
        p
          | Edit #[code src/App.js] and save to reload.
        a.App-link(
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        )
          | Learn React
  `
}

export default App
