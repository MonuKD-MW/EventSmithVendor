import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice';
import signupReducer from './features/signupSlice';
import portfolioReducer from './features/portfolioSlice';
import vendorDataReducer from './features/vendorDataSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    portfolio: portfolioReducer,
    vendorData: vendorDataReducer,
  },
});

export default store;