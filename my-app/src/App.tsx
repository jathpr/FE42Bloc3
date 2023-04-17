import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from "./Title";
import { Burger } from "./BurgerMenu"
import { Tabs } from "./Tabs"

export const App  = () => (
  <div>
  <Title />
  <Burger enabled handleclick={()=> console.log('click')} />
  <Tabs tabs  = {['All', 'My favorites', 'Popular']}
  handleclick ={()=> console.log('click')} />
  </div>
)

