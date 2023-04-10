import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appReducer } from "./appReducer";

export const setupStore = configureStore({
	reducer: { appReducer },
});

type RootState = ReturnType<typeof setupStore.getState>;
type AppDispatch = typeof setupStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
