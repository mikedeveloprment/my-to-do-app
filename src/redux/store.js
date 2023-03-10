import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import footerSlice from "./Slices/footerSlice";

export const store = configureStore({
	reducer: {
		counter: footerSlice,
		input: cartSlice,
	},
});
