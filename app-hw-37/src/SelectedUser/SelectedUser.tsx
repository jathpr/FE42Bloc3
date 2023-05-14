import React from 'react';
import './selectedUser.css';
import { useAppSelector } from '../Store/store';

export const SelectedUser = () => {
	const login = useAppSelector((state) => state.auth.userLogin)
	return (
		<div className='header__selected-user'>
			<div className='selected-user__icon'>{login[0].toUpperCase()}</div>
			<p className='selected-user__name'>{login}</p>
		</div>
	)
}