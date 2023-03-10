import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	inputText: "",
	tasks: [],
	colorS: "323232",
};

export const cartSlice = createSlice({
	name: "input",
	initialState,
	reducers: {
		setInput(state, action) {
			state.inputText = action.payload;
		},
		pushTask(state, action) {
			state.tasks.push(action.payload);
		},
		colorSelect(state, action) {
			state.colorS = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setInput, pushTask, colorSelect } = cartSlice.actions;

export default cartSlice.reducer;
