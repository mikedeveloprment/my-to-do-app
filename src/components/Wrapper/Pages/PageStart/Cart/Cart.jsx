import React from "react";
import clas from "./Cart.module.css";
import { useDispatch } from "react-redux";
import {
	changeFooterState,
	setNavigateFooter,
	changePageIndex,
} from "../../../../../redux/Slices/footerSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const [scaleState, setScaleState] = React.useState(true);
	const clickToArticle = () => {
		dispatch(setNavigateFooter(1));
		dispatch(changeFooterState(false));
		dispatch(changePageIndex(-6));
		setScaleState(false);
	};
	return (
		<article
			className={scaleState ? clas.cart : `${clas.cart} ${clas.cartActive}`}
			onClick={clickToArticle}
			tabIndex="0"
		>
			<div className={clas.cartHeader}>.Create cart</div>
			<div className={clas.cartMain}></div>
		</article>
	);
};

export default Cart;
