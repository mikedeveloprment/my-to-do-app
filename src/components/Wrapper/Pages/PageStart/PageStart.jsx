import React from "react";
import Cart from "./Cart/Cart";
import SplitTitle from "./SplitTitle/SplitTitle";
import clas from "./PageStart.module.css";

const PageStart = () => {
	return (
		<div className={clas.main}>
			<SplitTitle />
			<Cart />
		</div>
	);
};

export default PageStart;
