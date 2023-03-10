import React from "react";
import clas from "./Task.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
	changeFooterState,
	setNavigateFooter,
	changePageIndex,
} from "../../../../../redux/Slices/footerSlice";
import { setInput } from "../../../../../redux/Slices/cartSlice";

const Task = () => {
	const dispatch = useDispatch();
	const valueInput = useSelector(state => state.input.inputText);
	const inputInfo = e => {
		dispatch(setInput(e.target.value));
	};
	const inputFocus = () => {
		dispatch(changeFooterState(false));
		dispatch(changePageIndex(1));
		dispatch(setNavigateFooter(3));
	};
	return (
		<article className={clas.cart} tabIndex="0">
			<div className={clas.cartHeader}>Task</div>
			<div className={clas.cartMain}>
				<textarea
					onFocus={inputFocus}
					className={clas.cartInput}
					onChange={inputInfo}
					value={valueInput}
				></textarea>
			</div>
		</article>
	);
};

export default Task;
