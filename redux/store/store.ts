import { Store } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { waitlistSlice } from "../slices/api/waitlist-slice";
import { RootState, rootReducer } from "../reducers/persistedReducer";
import { jobSlice } from "../slices/api/job-slice";
import { industrySlice } from "../slices/api/industry-slice";
import { serviceSlice } from "../slices/api/service-slice";

const store: Store<RootState, any> & {
  dispatch: any;
} = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([thunk, waitlistSlice.middleware, jobSlice.middleware, industrySlice.middleware, serviceSlice.middleware]),

  enhancers: [],
});

const wrapper = createWrapper(() => store);

export { store, wrapper };
