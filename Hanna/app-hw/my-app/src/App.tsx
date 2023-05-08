import React from 'react';
import './index.css';
import { Title } from './hw37/title/title';
import { Menu } from './hw37/menu-burger/menu';
import  { Tabs } from './hw37/tabs/tabs';
import { PostList } from './hw38/PostList/Posts/PostList';

function App() {
return (
    <>
		<h1>HW37</h1>
		<Title></Title>
		<Menu></Menu>
		<Tabs></Tabs>
		<h1>HW38</h1>
		<PostList></PostList>
	</>
);
}

export default App;
