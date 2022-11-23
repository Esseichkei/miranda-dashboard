import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { RoomsSlice } from "./rooms/RoomsSlice";

const reducers = combineReducers({rooms: RoomsSlice.reducer});

export const store = configureStore({
    reducer: reducers,
});