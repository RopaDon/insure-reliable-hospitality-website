import { combineReducers } from "redux";
import { jobSlice } from "../slices/api/job-slice";
import { serviceSlice } from "../slices/api/service-slice";
import { industrySlice } from "../slices/api/industry-slice";
import { waitlistSlice } from "../slices/api/waitlist-slice";

export const rootReducer = combineReducers({
  [jobSlice.reducerPath]: jobSlice.reducer,
  [serviceSlice.reducerPath]: serviceSlice.reducer,
  [industrySlice.reducerPath]: industrySlice.reducer,
  [waitlistSlice.reducerPath]: waitlistSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
