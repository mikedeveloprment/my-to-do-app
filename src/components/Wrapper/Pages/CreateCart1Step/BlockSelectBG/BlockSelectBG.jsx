import React from "react";
import clas from "./BlockSelectBG.module.css";
import {
	changeFooterState,
	setNavigateFooter,
} from "../../../../../redux/Slices/footerSlice";
import { useDispatch, useSelector } from "react-redux";
import { colorSelect } from "../../../../../redux/Slices/cartSlice";

const BlockSelectBG = () => {
	const arrayBackgrounds = [
		"fcfe67",
		"f38c52",
		"1347ff",
		"a7f46a",
		"63B0c9",
		"646aff",
	];
	const dispatch = useDispatch();
	const backgroundCard = useSelector(state => state.input.colorS);
	const clickToBackground = item => {
		dispatch(changeFooterState(false));
		dispatch(colorSelect(item));
		dispatch(setNavigateFooter(2));
	};

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
						onClick={() => clickToBackground(item)}
					></li>
				))}
			</ul>
		</div>
	);
};

export default BlockSelectBG;
