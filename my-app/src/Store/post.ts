import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { OnePost, getPosts } from '../Components/Post/getPosts'

const initialState: { posts: OnePost[] } = { posts: [] }

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
        },
        increaseLike: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            post.likes = post.likes ? post.likes + 1 : 1
        },
        increaseDislike: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            post.dislikes = post.dislikes ? post.dislikes + 1 : 1
        },
        toggleFavoritesPosts: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            post.favorite = !post.favorite
            // post.favorite = post.favorite ? !post.favorite : post.favorite
        },
    },
    extraReducers(builder) {
        builder.addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
        })
    },
})

export const { setPosts, increaseLike, increaseDislike, toggleFavoritesPosts } = postsSlice.actions

export const postsReducer = postsSlice.reducer


export const getPostsThunk = createAsyncThunk('post/getPost', async (search: string = '') => {
    const posts = await getPosts({ 'limit': 4, 'search': search })
    return posts
})
