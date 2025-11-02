
import { combineReducers } from '@reduxjs/toolkit';
import travelReducer from './slices/travelSlice';

const rootReducer = combineReducers({
  travel: travelReducer,
});

export default rootReducer; 
