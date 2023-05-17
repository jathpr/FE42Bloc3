import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Post } from '../getPosts'

type PostState = { postsImgs: string[], currentImg: string }
const initialState: PostState = { postsImgs: [], currentImg: '#' }

export const postImagesSlice = createSlice({
	name: 'postImages',
	initialState,
	reducers: {
		setImages: (state, action: PayloadAction<string[]>) => {
			state.postsImgs = action.payload
		},
		setCurrentImg: (state, action: PayloadAction<string>) => {
			state.currentImg = action.payload
		},
		listImages: (state, action: PayloadAction<'next' | 'prev'>) => {
			const currentIndex = state.postsImgs.indexOf(state.currentImg)
			if (action.payload === 'next') {
				if (currentIndex === state.postsImgs.length - 1) {
					state.currentImg = state.postsImgs[0]
				} else {
					state.currentImg = state.postsImgs[currentIndex + 1]
				}
			} else {
				if (currentIndex === 0) {
					state.currentImg = state.postsImgs[state.postsImgs.length - 1]
				} else {
					state.currentImg = state.postsImgs[currentIndex - 1]
				}
			}
		}
	},
})

// Action creators are generated for each case reducer function
export const { setImages, setCurrentImg, listImages } = postImagesSlice.actions

export const postImagesReducer = postImagesSlice.reducer