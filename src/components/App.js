import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import logo from '../logo.svg'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default App
