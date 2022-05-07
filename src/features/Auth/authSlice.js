import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../api/authAPI';

// Create thunk
export const loginThunk = createAsyncThunk(
  '/auth/login',
  async (params, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(params);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const auth = createSlice({
  name: 'auth',
  initialState: {
    id: '',
    username: '',
    error: '',
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.loading = true;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.username = action.payload.user.username;
    },
    [loginThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

const { reducer, actions } = auth;
export const { login } = actions;
export default reducer;
