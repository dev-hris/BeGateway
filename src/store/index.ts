import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shadowBlockReducer from "./reducers/shadowBlockSlice";

const rootReducer = combineReducers({
  shadowBlockReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
