import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { OnePost } from '../Components/Post/getPosts'

const initialState: { posts: OnePost[] } = { posts: [] }

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
        },
    },
})

export const { setPosts } = postsSlice.actions

export const postsReducer = postsSlice.reducer