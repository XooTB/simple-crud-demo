import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = action.payload;
    },
    addSinglePost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== parseInt(action.payload)
      );
    },
    updateSinglePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== parseInt(action.payload.id)
      );
      state.posts.push(action.payload);
    },
  },
});

export const { addPost, addSinglePost, deletePost, updateSinglePost } =
  postsSlice.actions;

export default postsSlice.reducer;
