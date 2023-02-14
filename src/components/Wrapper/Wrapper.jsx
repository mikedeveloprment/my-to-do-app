import React from "react";
import Navigation from "./Navigation/Navigation";
import PageStart from "./Pages/PageStart/PageStart";
import SplitTitle from "./Pages/PageStart/SplitTitle/SplitTitle";
import clas from "./Wrapper.module.css";

const Wrapper = () => {
	return (
		<div className={clas.wrapper}>
			<PageStart />
			<Navigation />
		</div>
	);
};

export default Wrapper;
