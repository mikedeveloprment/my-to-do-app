import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	footerState: true,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeFooterState(state) {
			state.footerState = !state.footerState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeFooterState } = counterSlice.actions;

export default counterSlice.reducer;
