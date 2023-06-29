import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { OnePost } from '../server/getPosts'

type PostImg = {
   id: number,
   image: string | undefined,
   visibility: boolean
}

type PostState = {
   posts: OnePost[],
   postImg: PostImg
}

const initialState: PostState = {
   posts: [],
   postImg: { id: 0, image: '', visibility: false }
}

export const postsSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {
      setPosts: (state, action: PayloadAction<OnePost[]>) => {
         return { ...state, posts: action.payload }
         // state.posts = action.payload
      },
      savePostImg: (state, action: PayloadAction<PostImg>) => {
         return { ...state, postImg: action.payload }
         // state.postImg = action.payload
      },
   }
})

// Action creators are generated for each case reducer function
export const { setPosts, savePostImg } = postsSlice.actions

export const postsReducer = postsSlice.reducer