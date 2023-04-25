import React from 'react';
import { Counter } from './Lessons/Counter';
import { Title } from './Components/Title/Title';
import { Button } from './Components/Button/ButtonBurger';
import { Tabs, tabNames } from './Components/Tabs/Tabs';
import style from './Components/Button/ButtonBurger.module.css'
import {PostsList} from './Components/PostsList'


export const App = () => (
  <div>
    <Title />
    {/* <div className={style.buttonDiv}>
      <Button touched handleClick={() => console.log('OK')} />
    </div> */}
    {/* <Tabs active tabs={tabNames} activeTabName='All' /> */}
    {/* <Counter /> */}
    {/* <Counter initialCount={3}/> */}
    <PostsList/>
  </div>
)
