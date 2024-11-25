import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    firstName: '',
    lastName: '',
    areaCode: "+1",
    phone: '',
    password: '',
    confirmPassword:'',
    emailId: '',
    otpPhone: "",
    otpEmail: "",
  },
  reducers: {
    signup: (state, action) => {
      // Destructure the payload safely and merge with the state
      const {
        firstName,
        lastName,
        areaCode,
        phone,
        password,
        emailId,
        otpPhone,
        otpEmail,
        confirmPassword
      } = action.payload;
      state.firstName=firstName
      state.lastName=lastName
      state.areaCode=areaCode
      state.phone=phone
      state.password=password
      state.emailId=emailId
      state.otpPhone=otpPhone
      state.otpEmail=otpEmail
      state.confirmPassword=confirmPassword



      console.log(state.firstName,
        state.lastName,
        state.areaCode,
        state.phone,
        state.password,
        state.emailId,
        state.otpPhone,
        state.otpEmail,
        state.confirmPassword
      )
    },
  },
});

export const { signup } = signupSlice.actions;

export default signupSlice.reducer;
