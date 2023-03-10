import { useIsPresent } from "framer-motion";
import React from "react";
import Navigation from "./Navigation/Navigation";
import { motion } from "framer-motion";
import clas from "./Wrapper.module.css";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
	const isPresent = useIsPresent();
	return (
		<div className={clas.wrapper}>
			<Outlet />
			<motion.div
				initial={{ scaleY: 1 }}
				animate={{
					scaleY: 0,
					transition: {
						duration: 0.8,
						ease: "easeInOut",
					},
				}}
				exit={{
					scaleY: 1,
					transition: { duration: 1, ease: "easeInOut", delay: 0.6 },
				}}
				style={{ originY: isPresent ? 1 : 0 }}
				className={clas.block}
			></motion.div>
			<Navigation />
		</div>
	);
};

export default Wrapper;
