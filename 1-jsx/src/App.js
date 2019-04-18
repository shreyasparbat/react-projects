import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const buttonText = {
      text: 'Click me'
    }
    const style = {
      backgroundColor: 'blue',
      color: 'white'
    }

    return (
      <div className="App">
        <img src={logo} alt={'not allowed'}/>
        <label className={'label'} htmlFor={'name'}>
          Enter name:
        </label>
        <input id={'name'} type={'text'}/>
        <button style={style}>{buttonText.text}</button>
      </div>
    );
  }
}

export default App;
