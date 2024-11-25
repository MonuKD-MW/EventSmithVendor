import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    businessName: '',
    businessLogo: null,
    service: '',
    subCatagories:[],
  },
  reducers: {
    setPortfolioData: (state, action) => {
      const {businessLogo,businessName,service,subCatagories}=action.payload
      state.businessName = businessName;
      state.businessLogo = businessLogo;
      state.service=service;
      state.subCatagories=subCatagories
    },
    clearPortfolioData: (state) => {
      state.businessName = '';
      state.businessLogo = null;
      state.service = [];
    },
  },
});

export const { setPortfolioData, clearPortfolioData } = portfolioSlice.actions;
export default portfolioSlice.reducer;