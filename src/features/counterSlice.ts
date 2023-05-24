import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, getPosts } from "../server/getPosts";

type CounterState = {
  value: number;
  status?: "idle" | "loading" | "succeeded" | "failed";
  posts: Post[];
};

const initialState: CounterState = {
  value: 0,
  posts: [],
};

// const ThunkExample = (action, dispatch) => async{
//     result = await logic()
//     dispatch(actionFromResult})
// }

export const fetchPosts = createAsyncThunk("counter/fetchPosts", async () => {
  const response = await getPosts({});
  return response;
});

export const getPostsThunk = createAsyncThunk("post/getPosts", async () => {
  const posts = await getPosts({ limit: 10 });
  return posts;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getPostsThunk.fulfilled,
        (state, action: PayloadAction<Post[]>) => {
          if (state.posts.length) return;
          state.posts = action.payload;
        }
      )
      .addCase(getPostsThunk.pending, (state) => {})
      .addCase(getPostsThunk.rejected, (state) => {})
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export const counterReducer = counterSlice.reducer;
