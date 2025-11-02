
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface TripData {
  locationInfo?: any;
  budgetDurationData?: any;
  activitiesData?: any;
  dayPlansData?: any;
  hotelsData?: any;
  flightsData?: any; 
  authData?: any;
}

interface TravelState {
  tripData: TripData;
}

const initialState: TravelState = {
  tripData: {},
};

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    updateLocationInfo: (state, action: PayloadAction<any>) => {
      state.tripData.locationInfo = action.payload;
    },
    updateBudgetDuration: (state, action: PayloadAction<any>) => {
      state.tripData.budgetDurationData = action.payload;
    },
    updateActivities: (state, action: PayloadAction<any>) => {
      state.tripData.activitiesData = action.payload;
    },
    updateDayPlans: (state, action: PayloadAction<any>) => {
      state.tripData.dayPlansData = action.payload;
    },
    updateHotels: (state, action: PayloadAction<any>) => {
      state.tripData.hotelsData = { ...state.tripData.hotelsData, ...action.payload };
    },
    updateFlights: (state, action: PayloadAction<any>) => {
      state.tripData.flightsData = { ...state.tripData.flightsData, ...action.payload };
    },
    updateAuth: (state, action: PayloadAction<any>) => {
      state.tripData.authData = action.payload;
    },
    resetTripData: (state) => {
      state.tripData = {};
    },
  },
});

export const {
  updateLocationInfo,
  updateBudgetDuration,
  updateActivities,
  updateDayPlans,
  updateHotels,
  updateFlights,
  updateAuth,
  resetTripData,
} = travelSlice.actions;

export const selectTripData = (state: RootState) => state.travel.tripData;

export default travelSlice.reducer;
