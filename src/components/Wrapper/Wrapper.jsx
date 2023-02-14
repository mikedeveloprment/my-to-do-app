import React from "react";
import Navigation from "./Navigation/Navigation";
import SplitTitle from "./SplitTitle/SplitTitle";
import clas from "./Wrapper.module.css";

const Wrapper = () => {
	return (
		<div className={clas.wrapper}>
			<SplitTitle />
			<Navigation />
		</div>
	);
};

export default Wrapper;
