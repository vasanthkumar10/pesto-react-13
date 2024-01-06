const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const fetchPosts = createAsyncThunk("posts/fetchPosts", async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (err) {
    // console.log("error", err.message);
    throw new Error("FETCH_POST_FAILED");
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = {};
      });
  },
});

module.exports = {
  postReducer: postSlice.reducer,
  fetchPosts,
};
