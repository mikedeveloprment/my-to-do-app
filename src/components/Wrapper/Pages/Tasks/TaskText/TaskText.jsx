import React from "react";
import clas from "./TaskText.module.css";

const TaskText = ({ text = "text", i, color }) => {
	return (
		<article
			className={clas.cart}
			tabIndex="0"
			style={{
				animationDelay: `${i * 0.2 + 1}s`,
			}}
		>
			<div className={clas.cartHeader}>.Create cart</div>
			<div
				className={clas.cartMain}
				style={{
					background: `#${color}`,
				}}
			>
				{text}
			</div>
		</article>
	);
};

export default TaskText;
