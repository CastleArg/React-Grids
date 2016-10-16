import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import'../node_modules/react-grid-layout/css/styles.css';
import'../node_modules/react-resizable/css/styles.css';

import Dashboard from './Components/Dashboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Risk 10</h2>
        </div>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
