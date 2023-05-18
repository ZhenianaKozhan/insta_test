import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
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

export const { login } = authSlice.actions;
export default authSlice.reducer;
