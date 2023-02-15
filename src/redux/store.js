import { configureStore } from "@reduxjs/toolkit";
import footerSlice from "./Slices/footerSlice";

export const store = configureStore({
	reducer: {
		counter: footerSlice,
	},
});
