import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { regUser, createJWT, User, ActivateUser, activateUser, TokenUser, CheckUser, checkMe } from '../handleAuth'
import { act } from '@testing-library/react'

type Auth = {
	isAuthorised: boolean,
	userLogin: string,
	userPassword: string,
	userId: number
}

type AuthorisedUser = {
	login: string,
	pass: string
}

type Tokens = {
	access: string,
	refresh: string
}

const initialState: Auth = {
	isAuthorised: false,
	userLogin: '',
	userPassword: '',
	userId: 0
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
		/* handleAuth: (state, action: PayloadAction<TokenUser>) => { */
		/* const user = state.users.find((user) => user.username === action.payload.login && user.password === action.payload.pass)
		if (user) {
			state.userLogin = action.payload.login
			state.userPassword = action.payload.pass
			state.isAuthorised = true
		} else {
			state.isAuthorised = false
		} */
		/* }, */
		handleLogOut: (state) => {
			state.isAuthorised = false
			localStorage.clear()
		},
		/*addUser: (state, action: PayloadAction<User>) => {
			 state.users.push(action.payload) 
		}*/
	}, extraReducers(builder) {
		builder.addCase(handleAuthThunk.fulfilled, (state, action: PayloadAction<Tokens>) => {
			if (!action.payload.access) {
				state.isAuthorised = false
			} else {
				state.isAuthorised = true
				localStorage.setItem('accessToken', action.payload.access)
				localStorage.setItem('refreshToken', action.payload.refresh)
			}
		})
			.addCase(checkMeThunk.fulfilled, (state, action: PayloadAction<CheckUser>) => {
				state.userLogin = action.payload.username
			})
	}
})

export const { handleLogOut, setUserLogin, setUserPassword } = authSlice.actions
export const authReducer = authSlice.reducer

export const getAuthThunk = createAsyncThunk('auth/postUser', async (user: User) => {
	const newUser = await regUser(user)
	return newUser
})

export const getActivated = createAsyncThunk('auth/activateUser', async (user: ActivateUser) => {
	const activation = await activateUser(user)
	return activation
})

export const handleAuthThunk = createAsyncThunk('auth/handleAuth', async (user: TokenUser) => {
	const tokens = await createJWT({ email: user.email, password: user.password })
	return tokens
})

export const checkMeThunk = createAsyncThunk('auth/checkMe', async () => {
	const userinfo = await checkMe()
	return userinfo
})