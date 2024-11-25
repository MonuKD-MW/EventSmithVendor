import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    setCredentials: (state, action) => {
        const{email,password,isLoggedIn}=action.payload
      state.email = email;
      state.password = password;
      state.isLoggedIn = isLoggedIn;
      console.log(state.email,
        state.password
      )
    },
    logout: (state) => {
      state.email = '';
      state.password = '';
      state.isLoggedIn = false;
    },
    isLogIn:(state)=>{
      return state.isLoggedIn
    }
  },
});

export const { setCredentials, logout } = loginSlice.actions;
export default loginSlice.reducer;