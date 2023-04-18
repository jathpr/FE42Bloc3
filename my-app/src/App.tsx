import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './Title';
import { Button } from './Button/Button';
import { Tabs } from './Tabs/Tabs';
import { ButtonComponent } from './Button/ButtonClass';



function App() {
  const tabNames = ['All', 'My favourites', 'Popular']
  return (
    <div>
      <Title />
      <Button visible handleClick={() => console.log('ok')} />
      <Tabs tabs={tabNames} activeTab='My favourites' />

      <ButtonComponent visible />
    </div>
  );
}

export default App;
