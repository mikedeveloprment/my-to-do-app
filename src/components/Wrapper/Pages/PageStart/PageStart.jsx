import React from "react";
import Cart from "./Cart/Cart";
import SplitTitle from "../../../../components/usageComponents/SplitTitle/SplitTitle";
import clas from "./PageStart.module.css";

const PageStart = () => {
	return (
		<div className={clas.main}>
			<SplitTitle text="Create tasks-cards" />
			<Cart />
		</div>
	);
};

export default PageStart;
