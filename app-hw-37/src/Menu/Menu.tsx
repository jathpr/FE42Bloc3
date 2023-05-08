import React, { useState } from 'react';
import './menu.css';
import { Burger } from '../Burger/Burger';
import { MenuInput } from './MenuInput';
import { SelectedUser } from '../SelectedUser/SelectedUser';
import { Header } from '../Header/Header';
type Props = {
	defaultState?: boolean,
	giveSearchValue: (value: string) => void,
	isAuthorised: boolean,
	handleLogOut: () => void
}

export const Menu = ({ defaultState, giveSearchValue, isAuthorised, handleLogOut }: Props) => {
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
				<div className='menu__user-info'>
					{isAuthorised ? <SelectedUser /> : null}
				</div>
			</div>
			<Header menuState={btnState} isAuthorised={isAuthorised} handleLogOut={handleLogOut}></Header>
		</div>
	)
}