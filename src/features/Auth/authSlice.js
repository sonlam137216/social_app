import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create thunk


const auth = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    login: (state, action) => {},
  },
});

const { reducer, actions } = auth;
export const { login } = actions;
export default reducer;
