import React from 'react';
import './index.css';
import { Menu } from './components/menu-burger/menu';
import  { Tabs } from './components/tabs/tabs';
import { Navigation } from './components/Navigation/Navigation';
import { Registration } from './components/Registration/registration';

function App() {
return (
    <>
		<Menu></Menu>
		<Tabs></Tabs>
		<Navigation></Navigation>
		{/* <Registration></Registration> */}
	</>
);
}

export default App;
