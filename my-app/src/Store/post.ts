import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { OnePost, getPosts } from '../Components/Post/getPosts'
import { accessSync } from 'fs'

const initialState: { posts: OnePost[], favorites: OnePost[] } = { posts: [], favorites: [] }

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
        setFavoritesPosts: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            state.favorites = [...state.favorites, post]
            state.favorites.filter(el => el.id !== action.payload)
                // if (el.id !== action.payload){
                //     state.favorites = [...state.favorites, post]
                // }
                // else {
                //     state.favorites = [...state.favorites, post]
                // }
            // })
        },
    },
    extraReducers(builder) {
        builder.addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
        })
    },
})

export const { setPosts, increaseLike, increaseDislike, setFavoritesPosts } = postsSlice.actions

export const postsReducer = postsSlice.reducer


export const getPostsThunk = createAsyncThunk('post/getPost', async (search: string = '') => {
    const posts = await getPosts({ 'limit': 4, 'search': search })
    return posts
})
