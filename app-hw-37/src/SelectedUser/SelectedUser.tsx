import React from 'react';
import './selectedUser.css';

export const SelectedUser = () => {
	return (
		<div className='header__selected-user'>
			<div className='selected-user__icon'>C</div>
			<p className='selected-user__name'>CoolDude</p>
		</div>
	)
}