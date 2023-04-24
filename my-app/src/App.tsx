import React from 'react';
import { Lesson } from "./Lessons/PropsAndComponents"
import { Ex } from './Lessons/PropsAndComponents'
import { Button } from './Lessons/Button';
import { Auth } from './Lessons/AuthLesson2';
import { PostList } from './Lessons/Lesson3/PostsListLesson3';


export const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <Lesson example={11} />
        <Ex name="Polina" age={71}>WTF?!</Ex>
        <Button enabled handleClick={() => console.log('OK')}>НАЖМИ МЕНЯ</Button>
        <Button handleClick={() => console.log('OK')}>НАЖМИ МЕНЯ</Button>
        <Auth/>
        <PostList/>
      </p>
    </header>
  </div>
)
