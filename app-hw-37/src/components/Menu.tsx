import React from 'react';
import '../styles/menu.css';
import { Burger } from './Burger';
import { SelectUserMenu } from './SelectUserMenu';

export const Menu = () => (
	<div className='menu__wrapper'>
		<div className='menu'>
			<Burger click={() => console.log('Hi')}>
			</Burger>
			<input type="search" className='menu__search-input' placeholder='Search...' />
			<div className='menu__btn'>
				<svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
			</div>
			<div className='menu__user-info'></div>
		</div>
		<SelectUserMenu></SelectUserMenu>
	</div>
)