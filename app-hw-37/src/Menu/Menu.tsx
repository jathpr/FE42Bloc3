import React, { useState } from 'react';
import './menu.css';
import { Burger } from '../Burger/Burger';
import { MenuInput } from './MenuInput';
import { ThemeBtn } from './ThemeBtn';
import { SelectUserMenu } from '../SelectUserMenu/SelectUserMenu';
type Props = {
	defaultState?: boolean,
	giveSearchValue: (value: string) => void
}

export const Menu = ({ defaultState, giveSearchValue }: Props) => {
	const [btnState, setBtnState] = useState(!!defaultState)
	const handleClick = () => {
		setBtnState(!btnState)
	}
	const getSearchResults = (value: string) => {
		giveSearchValue(value)
	}
	return (
		<div className='menu__wrapper'>
			<div className='menu'>
				<Burger btnState={btnState} click={handleClick} >
				</Burger>
				<MenuInput giveSearchValueResults={getSearchResults}></MenuInput>
				<ThemeBtn />
				<div className='menu__user-info'></div>
			</div>
		</div>
	)
}