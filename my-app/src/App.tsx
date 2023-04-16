import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './Title';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <Title />
      <Button visible handleClick={() => console.log('ok')} />
    </div>
  );
}

export default App;
