import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type TabState = {
   tab: string,
}

const initialState: TabState = {
   tab: 'All'
}

export const tabsSlice = createSlice({
   name: 'tabs',
   initialState,
   reducers: {
      setActiveTab: (state, action: PayloadAction<string>) => {
         return { ...state, tab: action.payload }
         // state.tab = action.payload
      },
   }
})

// Action creators are generated for each case reducer function
export const { setActiveTab } = tabsSlice.actions

export const tabsReducer = tabsSlice.reducer