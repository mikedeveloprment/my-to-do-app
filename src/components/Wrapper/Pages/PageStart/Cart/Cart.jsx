import React from "react";
import clas from "./Cart.module.css";

const Cart = () => {
	return (
		<article className={clas.cart}>
			<div className={clas.cartHeader}></div>
			<div className={clas.cartMain}></div>
			<div className={clas.cartFooter}></div>
		</article>
	);
};

export default Cart;
