import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create users

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// get all users

export const allUsers = createAsyncThunk(
  "get all users",
  async (args,{ rejectWithValue }) => {
    const res = await fetch("http://localhost:5000/users");
    try {
      const result = await res.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const usersSlice = createSlice({
  name: "counter",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    // create users reducers
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // show all users reducers
    [allUsers.pending]: (state) => {
      state.loading = true;
    },
    [allUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload ;
    },
    [allUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
