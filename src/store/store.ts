import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../redux/reducerSlice/counterSlice";
import { testApi } from "../Provider/components/api/testApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([testApi.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
