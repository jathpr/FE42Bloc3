import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { checkUser, getProfile, regUser, saveTokens, UserProfile } from "../server/auth"

type User = {
   email: string,
   password: string,
   username: string
}

type UserAuth = {
   email: string,
   password: string
}

type Auth = {
   isAuthorized: boolean,
   userEmail: string,
   userPassword: string,
   users: User[]
}

export type Token = {
   access: string,
   refresh: string
};

export type TokenAndUserProfile = {
   access: string,
   refresh: string,
   profile: UserProfile
};

const TEST_USER: User = {
   email: 'user',
   password: 'user',
   username: 'Artem Malkin'
}

const initialState = {
   isAuthorized: false,
   accessToken: '',
   refreshToken: '',
   userEmail: '',
   userPassword: '',
   userUsername: '',
   users: [TEST_USER]
}

export const regUserThunk = createAsyncThunk('auth/regUserThunk', async (user: User) => {
   const result = await regUser(user)
   return result
})

export const handleAuthThunk = createAsyncThunk('auth/handleAuthThunk', async (user: UserAuth) => {
   const tokens: Token = await checkUser(user)
   saveTokens(tokens)
   const profile = await getProfile()
   const tokensAndUserProfile = { ...tokens, profile: profile }
   return tokensAndUserProfile
})

export const getProfileThunk = createAsyncThunk('auth/getProfileThunk', async () => {
   // const accessToken = localStorage.getItem('accessToken')
   const profile = await getProfile()
   return profile
})

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserEmail: (state, action: PayloadAction<string>) => {
         return { ...state, userEmail: action.payload }
      },
      setUserPassword: (state, action: PayloadAction<string>) => {
         return { ...state, userPassword: action.payload }
      },
      setUserUsername: (state, action: PayloadAction<string>) => {
         return { ...state, userUsername: action.payload }
      },
      // handleAuth: (state, action: PayloadAction<UserAuth>) => {
      //    const user = state.users.find(u => u.email === action.payload.email && u.password === action.payload.password)
      //    if (user)
      //       return { ...state, userEmail: '', userPassword: '', userUsername: user.username, isAuthorized: true }
      //    else
      //       return { ...state, userEmail: '', userPassword: '', userUsername: '', isAuthorized: false }
      // },
      handleLogout: (state) => {
         return { ...state, isAuthorized: false }
      },
      // addUser: (state, action: PayloadAction<User>) => {
      //    return { ...state, users: [...state.users, action.payload], userEmail: '', userPassword: '', userUsername: '', isAuthorized: false }
      //    // state.users.push(action.payload)
      // },
   },
   extraReducers(builder) {
      builder
         .addCase(regUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
            // return { ...state, post: action.payload }
            return { ...state, users: [...state.users, action.payload], userEmail: '', userPassword: '', userUsername: '', isAuthorized: false }
         })
         .addCase(handleAuthThunk.fulfilled, (state, action: PayloadAction<TokenAndUserProfile>) => {
            const { access, refresh, profile } = action.payload
            if (access && refresh) {
               return { ...state, accessToken: access, refreshToken: refresh, userUsername: profile.username, userEmail: '', userPassword: '', isAuthorized: true }
            }
            else return
         })
         .addCase(getProfileThunk.fulfilled, (state, action: PayloadAction<UserProfile>) => {
            return { ...state, userEmail: '', userPassword: '', userUsername: action.payload.username }
         })
   },
})

// Action creators are generated for each case reducer function
export const { setUserEmail, setUserPassword, setUserUsername, handleLogout } = authSlice.actions

export const authReducer = authSlice.reducer