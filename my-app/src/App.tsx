import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './Title';
import { Button } from './Button/Button';
import { Tabs } from './Tabs/Tabs';
// import { tabNames } from './Tabs/Tabs';

const tabNames = ['All', 'My favourites', 'Popular']


function App() {
  return (
    <div>
      <Title />
      <Button visible handleClick={() => console.log('ok')} />
      <Tabs tabs={tabNames} handleClick={() => console.log('active')} />
      
    </div>
  );
}

export default App;
