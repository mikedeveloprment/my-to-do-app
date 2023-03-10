import React from "react";
import clas from "./Navigation.module.css";
import arrow from "../../../assets//icons8-redo-100.png";
import done from "../../../assets//icons8-done-100 (1).png";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	changeFooterState,
	changePageIndex,
} from "../../../redux/Slices/footerSlice";
import { pushTask, setInput } from "../../../redux/Slices/cartSlice";

const Navigation = () => {
	const pageIndex = useSelector(state => state.counter.pageIndex);
	const stateNavigateFooter = useSelector(
		state => state.counter.stateNavigateFooter
	);
	const inputText = useSelector(state => state.input.inputText);
	const dispatch = useDispatch();
	const arrayPages = ["Home", "Tasks"];
	const constraintsRef = React.useRef(null);
	const [stateClasContMotion, setStateClasContMotion] = React.useState(true);
	const footerState = useSelector(state => state.counter.footerState);
	const navigate = useNavigate();
	const colorS = useSelector(state => state.input.colorS);
	const linkToCreatePage = () => {
		setStateClasContMotion(false);
		navigate(
			stateNavigateFooter != 3 ? `/${stateNavigateFooter}step` : "/tasks"
		);
		inputText && colorS != "323232"
			? dispatch(pushTask({ text: inputText, color: colorS }))
			: null;
		dispatch(setInput(""));
	};
	React.useEffect(() => {
		dispatch(changeFooterState(true));
	}, []);

	return (
		<nav
			className={
				footerState
					? clas.cartFooter
					: stateClasContMotion
					? `${clas.cartFooter} ${clas.cartFooterActive2}`
					: `${clas.cartFooter} ${clas.cartFooterActive2} ${clas.cartFooterActive}`
			}
		>
			<ul className={footerState ? clas.navBlock : ` ${clas.navBlockActive}`}>
				{arrayPages.map((page, index) => (
					<li
						key={index}
						onClick={() => dispatch(changePageIndex(index))}
						className={clas.navItem}
						style={{
							color: pageIndex == index ? "#1c1c1c" : "#fff",
							animationDelay: `${
								footerState ? index * 0.1 + 0.5 : index * 0.1
							}s`,
						}}
					>
						<Link
							to={`/${page.toLowerCase() == "home" ? "" : page.toLowerCase()}`}
							className={clas.Link}
						>
							{page}
						</Link>
					</li>
				))}
				<span
					style={{
						left: `${pageIndex * 50 + 2.5}% `,
					}}
					className={clas.activeBlock}
				></span>
			</ul>
			<motion.div
				dragPropagation
				ref={constraintsRef}
				className={
					!footerState
						? clas.cartFooterBlock
						: `${clas.cartFooterBlock} ${clas.cartFooterBlockActive}`
				}
			>
				<motion.button
					className={
						footerState
							? clas.buttonCart
							: `${clas.buttonCart} ${clas.buttonCartActive}`
					}
					dragElastic={0.1}
					drag="x"
					whileDrag={{ scale: 0.9 }}
					dragMomentum={false}
					dragConstraints={constraintsRef}
					dragSnapToOrigin={true}
					dragPropagation={true}
					dragListener={stateClasContMotion}
					dragTransition={{ bounceStiffness: 220, bounceDamping: 20 }}
					onDragEnd={linkToCreatePage}
				>
					<img
						className={
							stateClasContMotion
								? clas.arrow
								: `${clas.arrowActive} ${clas.arrow}`
						}
						src={arrow}
					/>
					<img
						className={
							stateClasContMotion
								? clas.done
								: `${clas.doneActive} ${clas.done}`
						}
						src={done}
					/>
				</motion.button>
			</motion.div>
		</nav>
	);
};

export default Navigation;
