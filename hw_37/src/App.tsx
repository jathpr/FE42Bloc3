import React from 'react';
import ReactDOM from 'react-dom/client';
import { Title } from './Title';
import { Menu } from './Menu';
import { Tabs } from './Tabs';

import './css/app.css';

export const App = () => (
  <div className='container'>
    <Title></Title>
    <Menu></Menu>
    <Tabs tabsArray = {[
      { title: 'All', active: true },
      { title: 'My favorite' },
      { title: 'Popular', active: false, disabled : true }
    ]} />
  </div>
)