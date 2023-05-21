import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { redirect } from 'react-router-dom'
import { store } from './store'

type Auth = {
	isAuthorised: boolean,
	userLogin: string,
	userPassword: string,
	users: User[]
}
type User = {
	login: string,
	pass: string
}
const initialState: Auth = {
	isAuthorised: false,
	userLogin: '',
	userPassword: '',
	users: [{ login: 'CoolDude', pass: 'react' }]
}

export const authSlice = createSlice({
	name: 'Authorization',
	initialState,
	reducers: {
		setUserLogin: (state, action: PayloadAction<string>) => {
			state.userLogin = action.payload
		},
		setUserPassword: (state, action: PayloadAction<string>) => {
			state.userPassword = action.payload
		},
		handleAuth: (state, action: PayloadAction<User>) => {
			const user = state.users.find((user) => user.login === action.payload.login && user.pass === action.payload.pass)
			if (user) {
				state.userLogin = action.payload.login
				state.userPassword = action.payload.pass
				state.isAuthorised = true
			}
		},
		handleLogOut: (state) => {
			state.isAuthorised = false
		},
		addUser: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload)
		}
	},
	extraReducers(builder) {
		builder.addCase(authRedirection.fulfilled, (state, action: PayloadAction<boolean>) => {
			if (action.payload) {
				console.log('success')
				redirect('success')
			} else {
				console.log('fail')
				redirect('fail')
			}
		})
	},
})

export const authRedirection = createAsyncThunk('auth/redirect', async () => {
	const result = await store.getState()
	const isAuthorised = await result.auth.isAuthorised
	return isAuthorised
})
export const { handleAuth, handleLogOut, setUserLogin, setUserPassword, addUser } = authSlice.actions
export const authReducer = authSlice.reducer