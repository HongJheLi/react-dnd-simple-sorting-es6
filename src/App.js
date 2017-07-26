import './App.css'

import React, { Component } from 'react'

import Simple from './Simple'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Simple />
      </div>
    )
  }
}

export default App
