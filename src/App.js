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
          <h2>Welcome to Data Grids Pro</h2>
          <h4>Feel free to resize and move the data grids</h4>
        </div>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
