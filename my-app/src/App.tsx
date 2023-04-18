import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from "./Title";
import { ButtonComponent } from "./HW_37/BurgerMenu"
import { Tabs } from "./HW_37/Tabs"
import { Auth } from "./Auth"


export const App  = () => (
  <div>
  <Title />
  <ButtonComponent enabled  />
  <Tabs tabs  = {['All', 'My favorites', 'Popular']} activeTab='All'/>
  {/* <Auth></Auth> */}
  </div>
)

