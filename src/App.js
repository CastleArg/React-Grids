import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Risk 10</h2>
        </div>
        <Grid source="https://api.trademe.co.nz/v1/Localities/Regions.json"/>
      </div>
    );
  }
}

export default App;
