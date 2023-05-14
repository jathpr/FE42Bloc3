import React, { ReactNode } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { Main } from '../Main/Main';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { handleAuth, setUserLogin, setUserPassword } from '../Store/auth';

const LOGIN = 'CoolDude'
const PASSWORD = 'react'

export const Navigation = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const authCheck = (login: string, password: string) => {
		if (login === LOGIN && password === PASSWORD) {
			dispatch(setUserLogin(login))
			dispatch(setUserPassword(password))
			dispatch(handleAuth())
			navigate('/success')
		} else {
			navigate('/fail')
		}
	}
	return <>
		<Routes>
			<Route index element={<Auth check={authCheck}></Auth>}></Route>
			<Route path='success' element={<Reg />}></Route>
			<Route path='fail' element={<Reg />}></Route>
			<Route path='posts/*' element={<Main />}></Route>
		</Routes>
	</>
}