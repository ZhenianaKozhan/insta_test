import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: 0,
      name: '',
    },
  },
  reducers: {
    login: (state, action) => {
      const user = {
        id: Math.random() * 10e6,
        name: action.payload,
      };
      state.user = user;
    },
  },
});

// this is for dispatch
export const { login } = authReducer.actions;

// this is for configureStore
export default authReducer.reducer;
