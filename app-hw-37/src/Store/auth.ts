import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Auth = {
	isAuthorised: boolean,
	userLogin: string,
	userPassword: string
}

const initialState: Auth = {
	isAuthorised: false,
	userLogin: '',
	userPassword: ''
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
		handleAuth: (state) => {
			state.isAuthorised = true
		},
		handleLogOut: (state) => {
			state.isAuthorised = false
		}
	}
})
export const { handleAuth, handleLogOut, setUserLogin, setUserPassword } = authSlice.actions
export const authReducer = authSlice.reducer