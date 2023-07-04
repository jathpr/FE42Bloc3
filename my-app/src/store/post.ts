import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { OnePost, getPost, getPosts, getUserPosts } from '../server/getPosts'
import { searchPosts, searchUserPosts } from '../server/searchPosts'

type PostImg = {
   id: number,
   image: string | undefined,
   visibility: boolean
}

type PostState = {
   posts: OnePost[],
   postsUser: OnePost[],
   postImg: PostImg,
   post: OnePost
}

const initialState: PostState = {
   posts: [],
   postsUser: [],
   postImg: { id: 0, image: '', visibility: false },
   post: {
      author: 0,
      date: '',
      description: '',
      id: 0,
      image: '',
      lesson_num: 0,
      text: '',
      title: '',
      likes: 0,
      dislikes: 0,
      isFavorite: false
   }
}

type getPostOptions = {
   searchInputValue: string | undefined,
   isForUser: boolean
}

// export const getPostsThunk = createAsyncThunk('posts/getPosts', async () => {
export const getPostsThunk = createAsyncThunk('posts/getPosts', async ({ searchInputValue, isForUser }: getPostOptions) => {
   console.log("🚀 ~ file: post.ts:44 ~ getPostsThunk ~ isForUser:", isForUser)

   let serverPosts
   if (isForUser) {
      serverPosts = searchInputValue ? await searchUserPosts({ search: searchInputValue }) : await getUserPosts({})
   }
   else
      serverPosts = searchInputValue ? await searchPosts({ search: searchInputValue }) : await getPosts({ limit: 8 })
   console.log("🚀 ~ file: post.ts:52 ~ getPostsThunk ~ serverPosts:", serverPosts)
   // const serverPosts = await getPosts({ limit: 8 })
   return serverPosts
})

export const getPostByIdThunk = createAsyncThunk('posts/getPostByIdThunk', async (postId: string | undefined) => {
   // postId && getPost(postId)
   //    .then(postFromServer => {
   //       setPost(postFromServer)
   //    })
   // const serverPosts = searchInputValue ? await searchPosts({ search: searchInputValue }) : await getPosts({ limit: 8 })
   const postFromServer = await getPost(postId)
   return postFromServer
})

// export const getPostsUserThunk = createAsyncThunk('posts/getPosts', async (searchInputValue: string | undefined) => {
//    const serverPosts = searchInputValue ? await searchUserPosts({ search: searchInputValue }) : await getPosts({})
//    // const serverPosts = await getPosts({ limit: 8 })
//    return serverPosts
// })

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
         .addCase(getPostByIdThunk.fulfilled, (state, action: PayloadAction<OnePost>) => {
            return { ...state, post: action.payload }
         })
      // .addCase(getPostsUserThunk.fulfilled, (state, action: PayloadAction<OnePost[]>) => {
      //    return { ...state, postsUser: action.payload }
      //    // state.posts = state.posts.concat(action.payload)
      // })
   },
})

// Action creators are generated for each case reducer function
export const { setPosts, savePostImg, increaseLikes, increaseDislikes, toggleFavorite } = postsSlice.actions

export const postsReducer = postsSlice.reducer