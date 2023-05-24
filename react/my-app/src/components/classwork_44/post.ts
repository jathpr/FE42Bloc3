import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../tools/getPosts';

type PostState = { posts: Post[] }

const initialState: PostState = { posts: [] }

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            if (state.posts.length) return
            state.posts = action.payload
        },
        increaseLike: (state, action: PayloadAction<number>) => {
            const thisPost = state.posts.find(post => post.id === action.payload)
            if (!thisPost) return
            thisPost.likes = thisPost.likes ? thisPost.likes + 1 : 1
        },
        increaseDislike: (state, action: PayloadAction<number>) => {
            const thisPost = state.posts.find(post => post.id === action.payload)
            if (!thisPost) return
            thisPost.dislikes = thisPost.dislikes ? thisPost.dislikes + 1 : 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPosts, increaseLike, increaseDislike } = postsSlice.actions

// export default postsSlice.reducer
export const postsReducer = postsSlice.reducer
