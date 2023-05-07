import React, { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { Main } from '../Main/Main';

const LOGIN = 'CoolDude'
const PASSWORD = 'react'

type Props = {
	searchValue: string,
	getAuthorised: () => void,
	isAuthorised: boolean
}
export const Navigation = ({ searchValue, getAuthorised, isAuthorised }: Props) => {
	const [userLogin, setUserLogin] = useState('')
	const [userPass, setUserPass] = useState('')

	const authCheck = (login: string, password: string) => {
		if (login === LOGIN && password === PASSWORD) {
			setUserLogin(login)
			setUserPass(password)
			getAuthorised()
			return '/success'
		} else {
			return '/fail'
		}
	}
	return <>
		<Routes>
			<Route index element={<Auth check={authCheck} isAuthorised={isAuthorised}></Auth>}></Route>
			<Route path='success' element={<Reg wasSuccessed={true} ></Reg>}></Route>
			<Route path='fail' element={<Reg wasSuccessed={false}></Reg>}></Route>
			<Route path='posts/*' element={<Main searchValue={searchValue} />}></Route>
		</Routes>
	</>
}