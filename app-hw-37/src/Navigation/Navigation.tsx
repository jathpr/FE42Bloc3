import React, { ReactNode } from 'react';
import { useState } from 'react';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { Main } from '../Main/Main';

const LOGIN = 'CoolDude'
const PASSWORD = 'react'

export const Navigation = () => {
	const [page, setPage] = useState('Auth')
	const [userLogin, setUserLogin] = useState('')
	const [userPass, setUserPass] = useState('')

	const authCheck = (login: string, password: string) => {
		if (login === LOGIN && password === PASSWORD) {
			setPage('Success')
			setUserLogin(login)
			setUserPass(password)
		} else {
			setPage('Fail')
		}
	}
	const movetoOtherPage = (page: string) => {
		setPage(page)
		setUserLogin('')
		setUserPass('')
	}
	return <>
		{page === 'Auth' && <Auth check={authCheck}></Auth>}
		{page === 'Success' && <Reg wasSuccessed={true} animateBtn={movetoOtherPage}></Reg>}
		{page === 'Fail' && <Reg wasSuccessed={false} animateBtn={movetoOtherPage}></Reg>}
		{page === 'Main' && <Main />}
	</>
}