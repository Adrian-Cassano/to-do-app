import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import calendarSlice from '../slices/calendarSlice';

const store = configureStore({
  reducer: {
    userSlice,
    calendarSlice
    
  },
});

export default store;