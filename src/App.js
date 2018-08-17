import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputMask from 'react-input-mask';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <InputMask mask="999.999.999-99" inputRef={(e) => {this.texto = e}}/>
        <button onClick={() => {console.log(this.texto.value)}}>Ok</button>

      </div>
    );
  }
}

export default App;
