import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Post, getPosts } from '../getPosts'
import { useAppSelector } from './store'

type PostState = { posts: Post[], currentImg: string }
const initialState: PostState = { posts: [], currentImg: '#' }

export const postsSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<Post[]>) => {
			if (state.posts.length) return
			state.posts = action.payload
		},
		increaseLikes: (state, action: PayloadAction<number>) => {
			const likedPost = state.posts.find((post) => post.id === action.payload)
			if (!likedPost) return
			likedPost.likes = likedPost.likes ? likedPost.likes + 1 : 1
		},
		increaseDislikes: (state, action: PayloadAction<number>) => {
			const dislikedPost = state.posts.find((post) => post.id === action.payload)
			if (!dislikedPost) return
			dislikedPost.dislikes = dislikedPost.dislikes ? dislikedPost.dislikes + 1 : 1
		},
		setCurrentImg: (state, action: PayloadAction<string>) => {
			state.currentImg = action.payload
		},
		listImages: (state, action: PayloadAction<'next' | 'prev'>) => {
			const images = state.posts.map((post) => post.image ? post.image : '#')
			const currentIndex = images.indexOf(state.currentImg)
			if (action.payload === 'next') {
				if (currentIndex === images.length - 1) {
					state.currentImg = images[0]
				} else {
					state.currentImg = images[currentIndex + 1]
				}
			} else {
				if (currentIndex === 0) {
					state.currentImg = images[images.length - 1]
				} else {
					state.currentImg = images[currentIndex - 1]
				}
			}
		}
	},
	extraReducers(builder) {
		builder.addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
			state.posts = action.payload
		})
	}
})

// Action creators are generated for each case reducer function
export const { setPosts, increaseLikes, increaseDislikes, setCurrentImg, listImages } = postsSlice.actions

/* const searchValue = useAppSelector((state) => state.search.searchValue) */
export const postsReducer = postsSlice.reducer

export const getPostsThunk = createAsyncThunk('posts/getPosts', async (searchValue: string) => {
	const posts = await getPosts(6, searchValue)
	return posts
})