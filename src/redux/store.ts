import {configureStore} from "@reduxjs/toolkit";
import reducer from "./slice";

const store = configureStore({reducer: reducer});

export default store

export type RootState = ReturnType<typeof store.getState> // infer type

export type AppDispatch = typeof store.dispatch