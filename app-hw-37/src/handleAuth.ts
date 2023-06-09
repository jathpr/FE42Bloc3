import React, { ReactNode } from 'react';
const AUTHURL = "https://studapi.teachmeskills.by/auth/users/"
const ACTIVATEURL = 'https://studapi.teachmeskills.by/auth/users/activation/'
const JWTCREATEURL = 'https://studapi.teachmeskills.by/auth/jwt/create/'
const GETMEURL = 'https://studapi.teachmeskills.by/auth/users/me/'

export type User = {
	username: string,
	password: string,
	email: string
}
export type ActivateUser = {
	uid: string,
	token: string
}

export type TokenUser = {
	email: string,
	password: string,
}
export type CheckUser = {
	username: string,
	id: number,
	email: string
}
export const regUser = async (user: User) => {
	const authUrl = new URL(AUTHURL);
	const response = await fetch(authUrl, {
		method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user)
	});
	const result = await response.json();
	console.log(result)
	return result
};

export const activateUser = async (user: ActivateUser) => {
	const activateUrl = new URL(ACTIVATEURL);
	const response = await fetch(activateUrl, {
		method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user)
	});
	const result = await response.json();
	console.log(result)
	return result
}

export const createJWT = async (user: TokenUser) => {
	const createJWTUrl = new URL(JWTCREATEURL);
	const response = await fetch(createJWTUrl, {
		method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user)
	});
	const tokens = await response.json();
	return tokens
}

export const checkMe = async () => {
	const token = localStorage.getItem('accessToken')
	const checkMeURL = new URL(GETMEURL);
	const response = await fetch(checkMeURL, {
		method: 'GET', headers: { "Authorization": `Bearer ${token}` }
	});
	const me = await response.json();
	return me
}