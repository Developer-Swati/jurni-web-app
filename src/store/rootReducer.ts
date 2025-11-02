
import { combineReducers } from '@reduxjs/toolkit';
import travelReducer from './slices/travelSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  travel: travelReducer,
  auth: authReducer,
});

export default rootReducer;
