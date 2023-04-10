import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dateStart: "",
	dateEnd: "",
};

export const appSlice = createSlice({
	name: "file",
	initialState,
	reducers: {
		setDate(state, action) {
			state.dateStart = action.payload.dateStart;
			state.dateEnd = action.payload.dateEnd;
		},
	},
});

export const { setDate } = appSlice.actions;

export const appReducer = appSlice.reducer;
