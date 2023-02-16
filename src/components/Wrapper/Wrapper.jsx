import { useIsPresent } from "framer-motion";
import React from "react";
import Navigation from "./Navigation/Navigation";
import PageStart from "./Pages/PageStart/PageStart";
import { motion } from "framer-motion";
import clas from "./Wrapper.module.css";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
	const isPresent = useIsPresent();
	return (
		<div className={clas.wrapper}>
			<div id="detail">
				<Outlet />
			</div>
			<motion.div
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0, transition: { duration: 0.5 } }}
				exit={{ scaleY: 1, transition: { duration: 0.5 } }}
				style={{ originY: isPresent ? 1 : 0 }}
				className={clas.block}
			/>
			<Navigation />
		</div>
	);
};

export default Wrapper;
