import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Post, getPosts, PostParams, getMyPosts } from '../getPosts'
import { RootState } from './store'

type PostState = { posts: Post[], currentId: number, nextId: number, prevId: number, currentImg: string, popularPosts: Post[], myPosts: Post[], isLoading: boolean, limit: number, offset: number, count: number, ordering: string }
const initialState: PostState = {
	posts: [], currentId: 0, nextId: 0, prevId: 0, currentImg: '#', popularPosts: [], myPosts: [], isLoading: false, limit: 6, offset: 0, count: 0, ordering: 'id'
}

export const postsSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPostsIds: (state, action: PayloadAction<number>) => {
			state.currentId = action.payload
			const Ids = state.posts.map((post) => post.id)
			const currentIndex = Ids.indexOf(state.currentId)
			state.nextId = Ids[currentIndex + 1]
			state.prevId = Ids[currentIndex - 1]
		},
		increaseLikes: (state, action: PayloadAction<number>) => {
			const likedPost = state.posts.find((post) => post.id === action.payload)
			if (!likedPost) return
			likedPost.likes = likedPost.likes ? likedPost.likes + 1 : 1
			const likedPosts = state.posts.filter((post) => post.likes)
			{/* @ts-ignore */ }
			const sortedPosts = likedPosts.sort((post1, post2) => post2.likes - post1.likes)
			state.popularPosts = sortedPosts
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
		},
		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload
		},
		setOrdering: (state, action: PayloadAction<string>) => {
			state.ordering = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getPostsThunk.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getPostsThunk.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.isLoading = false
				state.posts = action.payload
			})
			.addCase(getMyPostsThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.myPosts = action.payload
			})
			.addCase(getNextPageThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.posts = action.payload
				state.offset = state.offset + state.limit
			})
			.addCase(getPrevPageThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.posts = action.payload
				state.offset = state.offset - state.limit
			})
	}
})

// Action creators are generated for each case reducer function
export const { setPostsIds, increaseLikes, increaseDislikes, setCurrentImg, listImages, setLimit, setOrdering } = postsSlice.actions

/* const searchValue = useAppSelector((state) => state.search.searchValue) */
export const postsReducer = postsSlice.reducer

export const getPostsThunk = createAsyncThunk<Post[], PostParams, { state: RootState }>('posts/getPosts', async ({ limit, searchValue, ordering }, store) => {
	const state = store.getState()
	const posts = await getPosts({ limit: limit ? limit : state.posts.limit, searchValue, ordering: ordering ? ordering : state.posts.ordering })
	return posts
})

export const getNextPageThunk = createAsyncThunk<Post[], void, { state: RootState }>('posts/getNextPosts', async (_, store) => {
	const state = store.getState()
	const posts = await getPosts({ limit: state.posts.limit, searchValue: state.search.searchValue, offset: state.posts.offset + state.posts.limit })
	return posts
})

export const getPrevPageThunk = createAsyncThunk<Post[], void, { state: RootState }>('posts/getPrevPosts', async (_, store) => {
	const state = store.getState()
	const posts = await getPosts({ limit: state.posts.limit, searchValue: state.search.searchValue, offset: state.posts.offset - state.posts.limit })
	return posts
})

export const getMyPostsThunk = createAsyncThunk('posts/getMyPosts', async (limit: number) => {
	const posts = await getMyPosts(limit)
	return posts
})