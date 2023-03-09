import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import colorSlice from "../features/color/colorSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
