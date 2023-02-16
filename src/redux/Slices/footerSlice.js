import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	footerState: true,
	pageIndex: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeFooterState(state, action) {
			state.footerState = action.payload;
		},
		changePageIndex(state, action) {
			state.pageIndex = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeFooterState, changePageIndex } = counterSlice.actions;

export default counterSlice.reducer;
