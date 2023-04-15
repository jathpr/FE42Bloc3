import React from 'react';
// import './App.css';
import { Lesson } from './lesson';
import { Ex } from './lesson'
import { Button } from './button';


export const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <Lesson example={11} />
        <Ex name="Polina" age={71}>WTF?!</Ex>
        <Button enabled handleClick={() => console.log('OK')}>НАЖМИ МЕНЯ</Button>
        <Button handleClick={() => console.log('OK')}>НАЖМИ МЕНЯ</Button>
      </p>
    </header>
  </div>
)
