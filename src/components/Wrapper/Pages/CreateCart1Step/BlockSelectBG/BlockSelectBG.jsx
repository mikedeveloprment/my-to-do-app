import React from "react";
import clas from "./BlockSelectBG.module.css";

const BlockSelectBG = () => {
	const arrayBackgrounds = [
		"fcfe67",
		"f38c52",
		"1347ff",
		"a7f46a",
		"63B0c9",
		"646aff",
	];
	const [backgroundCard, setBackgroundCard] = React.useState("323232");

	return (
		<div className={clas.selectBg}>
			<div className={clas.card}>
				<div className={clas.cartHeader}>Your card</div>
				<div
					className={clas.cartMain}
					style={{
						background: `#${backgroundCard}`,
					}}
				></div>
			</div>
			<ul className={clas.bgVariablesCont}>
				{arrayBackgrounds.map((item, index) => (
					<li
						key={index}
						className={
							item === backgroundCard
								? `${clas.background} ${clas.backgroundActive}`
								: clas.background
						}
						style={{
							background: `#${item}`,
							animationDelay: `${index * 0.15 + 0.75}s`,
						}}
						onClick={() => setBackgroundCard(item)}
					></li>
				))}
			</ul>
		</div>
	);
};

export default BlockSelectBG;
