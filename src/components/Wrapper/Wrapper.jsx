import React from "react";
import Navigation from "./Navigation/Navigation";
import clas from "./Wrapper.module.css";

const Wrapper = () => {
	return (
		<div className={clas.wrapper}>
			<Navigation />
		</div>
	);
};

export default Wrapper;
