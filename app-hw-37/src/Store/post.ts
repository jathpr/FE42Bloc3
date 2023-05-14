import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Post } from '../getPosts'

type PostState = { posts: Post[], postsImgs: string[], currentImg: string }
const initialState: PostState = { posts: [], postsImgs: [], currentImg: '#' }

export const postsSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<Post[]>) => {
			state.posts = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setPosts } = postsSlice.actions

export const postsReducer = postsSlice.reducer