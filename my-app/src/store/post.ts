import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { OnePost, getPosts } from '../server/getPosts'
import { searchPosts } from '../server/searchPosts'

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

// export const getPostsThunk = createAsyncThunk('posts/getPosts', async () => {
export const getPostsThunk = createAsyncThunk('posts/getPosts', async (searchInputValue: string | undefined) => {
   const serverPosts = searchInputValue ? await searchPosts({ search: searchInputValue }) : await getPosts({ limit: 8 })
   // const serverPosts = await getPosts({ limit: 8 })
   return serverPosts
})

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
      increaseLikes: (state, action: PayloadAction<number>) => {
         const postId = action.payload
         const post = state.posts.find(p => p.id === postId)
         if (!post) {
            return
         }

         post.likes = post.likes ? post.likes + 1 : 1
      },
      increaseDislikes: (state, action: PayloadAction<number>) => {
         const postId = action.payload
         const post = state.posts.find(p => p.id === postId)
         if (!post) {
            return
         }

         post.dislikes = post.dislikes ? post.dislikes + 1 : 1
      },
      toggleFavorite: (state, action: PayloadAction<number>) => {
         const postId = action.payload
         const post = state.posts.find(p => p.id === postId)
         if (!post) {
            return
         }

         post.isFavorite = post.isFavorite ? false : true
      },
   },
   extraReducers(builder) {
      builder
         .addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<OnePost[]>) => {
            return { ...state, posts: action.payload }
            // state.posts = state.posts.concat(action.payload)
         })
   },
})

// Action creators are generated for each case reducer function
export const { setPosts, savePostImg, increaseLikes, increaseDislikes, toggleFavorite } = postsSlice.actions

export const postsReducer = postsSlice.reducer