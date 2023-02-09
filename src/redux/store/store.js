import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import modalSlice from '../slices/modalSlice';

const store = configureStore({
  reducer: {
    userSlice,
    modalSlice
    
  },
});

export default store;