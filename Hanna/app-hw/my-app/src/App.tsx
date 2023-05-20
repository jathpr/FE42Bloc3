import React from 'react';
import './index.css';
import { Title } from './hw37/title/title';
import { Menu } from './hw37/menu-burger/menu';
import  { Tabs } from './hw37/tabs/tabs';
// import { PostList } from './hw38/PostList/Posts/PostList';
import { Navigation } from './hw39/Navigation/Navigation';
import { Posts } from './hw38/PostList/Posts/Posts';

function App() {
return (
    <>
		<h1>HW37</h1>
		<Title></Title>
		<Menu></Menu>
		<Tabs></Tabs>
		<h1>HW38</h1>
		<Posts></Posts>
		<h1>HW39</h1>
		<Navigation></Navigation>
	</>
);
}

export default App;
