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

const Navigation = () => {
	const pageIndex = useSelector(state => state.counter.pageIndex);
	const dispatch = useDispatch();
	const arrayPages = ["Home", "Tasks"];
	const constraintsRef = React.useRef(null);
	const [stateClasContMotion, setStateClasContMotion] = React.useState(true);
	const footerState = useSelector(state => state.counter.footerState);
	const navigate = useNavigate();
	const linkToCreatePage = () => {
		setStateClasContMotion(false);
		navigate("/1step");
		dispatch(changePageIndex(-6));
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
							animationDelay: `${index * 0.1 + 0.5}s`,
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
						width: `${100 / arrayPages.length - 8}%`,
						left: `${pageIndex * (100 / arrayPages.length) + 4}%`,
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
