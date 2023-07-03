import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type User = {
   login: string,
   pass: string,
   username: string
}

type UserAuth = {
   login: string,
   pass: string
}

type Auth = {
   isAuthorized: boolean,
   userLogin: string,
   userPassword: string,
   users: User[]
}

const TEST_USER: User = {
   login: 'user',
   pass: 'user',
   username: 'Artem Malkin'
}

const initialState = {
   // isAuthorized: true,
   isAuthorized: false,
   userLogin: '',
   userPassword: '',
   userUsername: '',
   users: [TEST_USER]
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserLogin: (state, action: PayloadAction<string>) => {
         return { ...state, userLogin: action.payload }
      },
      setUserPassword: (state, action: PayloadAction<string>) => {
         return { ...state, userPassword: action.payload }
      },
      setUserUsername: (state, action: PayloadAction<string>) => {
         return { ...state, userUsername: action.payload }
      },
      handleAuth: (state, action: PayloadAction<UserAuth>) => {
         const user = state.users.find(u => u.login === action.payload.login && u.pass === action.payload.pass)
         if (user)
            return { ...state, userLogin: action.payload.login, userPassword: action.payload.pass, userUsername: user.username, isAuthorized: true }
         else
            return { ...state, userLogin: '', userPassword: '', userUsername: '', isAuthorized: false }
      },
      handleLogout: (state) => {
         return { ...state, isAuthorized: false }
      },
      addUser: (state, action: PayloadAction<User>) => {
         return { ...state, users: [...state.users, action.payload], userLogin: '', userPassword: '', userUsername: '', isAuthorized: false }
         // state.users.push(action.payload)
      },
   },
})

// Action creators are generated for each case reducer function
export const { setUserLogin, setUserPassword, setUserUsername, handleAuth, handleLogout, addUser } = authSlice.actions

export const authReducer = authSlice.reducer