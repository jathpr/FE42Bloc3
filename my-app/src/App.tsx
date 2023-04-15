import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Lesson } from './lesson';
import { Ex } from './lesson'
import { Button } from './button';


export const App = () => (
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
        <Lesson example={11} />
        <Ex name="Polina" age={71}>WTF?!</Ex>
        <Button enabled handleClick={() => console.log('OK')}>НАЖМИ МЕНЯ</Button>
        <Button handleClick={() => console.log('OK')}>НАЖМИ МЕНЯ</Button>
      </p>
    </header>
  </div>
)
