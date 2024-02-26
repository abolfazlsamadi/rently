import { configureStore } from '@reduxjs/toolkit';
import locationStateReducer from './locationStateSlice';

export default configureStore({
  reducer: {
    locationState : locationStateReducer,
  },
})