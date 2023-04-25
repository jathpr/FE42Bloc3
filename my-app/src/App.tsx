import React from 'react';
import './App.css';
import { Title } from './Title';
// import { Button } from './Button/Button';
import { Tabs } from './Tabs/Tabs';
import { Button } from './Button/ButtonClass';
import { RenderPostsList } from './hw-38/RenderPostsList';
import { postsList } from './hw-38/PostsList';



function App() {
  const tabNames = ['All', 'My favourites', 'Popular']
  return (
    <div>
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Tabs tabs={tabNames} activeTab='My favourites' />
      <Button visible handleClick={() => console.log('ok')} />
      <RenderPostsList array={postsList}/>
    </div>
  );
}

export default App;
