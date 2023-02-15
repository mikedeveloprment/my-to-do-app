import React from "react";
import clas from "./Navigation.module.css";
import arrow from "../../../assets//icons8-redo-100.png";
import done from "../../../assets//icons8-done-100 (1).png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Navigation = () => {
	const [pageIndex, setPageIndex] = React.useState(0);
	const arrayPages = ["Home", "Tasks"];
	const constraintsRef = React.useRef(null);
	const [stateClasContMotion, setStateClasContMotion] = React.useState(true);
	const footerState = useSelector(state => state.counter.footerState);
	return (
		<div>
			<nav className={clas.nav}>
				<div
					className={
						footerState
							? clas.cartFooter
							: stateClasContMotion
							? `${clas.cartFooter} ${clas.cartFooterActive2}`
							: `${clas.cartFooter} ${clas.cartFooterActive2} ${clas.cartFooterActive}`
					}
				>
					<ul
						className={footerState ? clas.navBlock : ` ${clas.navBlockActive}`}
					>
						{arrayPages.map((page, index) => (
							<li
								key={index}
								onClick={() => setPageIndex(index)}
								className={clas.navItem}
								style={{
									color: pageIndex == index ? "#1c1c1c" : "#fff",
									animationDelay: `${index * 0.1 + 0.5}s`,
									transitionDelay: `${index * 0.1 + 0.5}s`,
								}}
							>
								{page}
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
							onDragEnd={() => setStateClasContMotion(false)}
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
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
