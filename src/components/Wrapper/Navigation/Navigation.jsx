import React from "react";
import clas from "./Navigation.module.css";

const Navigation = () => {
	const [pageIndex, setPageIndex] = React.useState(0);
	const arrayPages = ["Home", "Tasks"];

	return (
		<div>
			<nav className={clas.nav}>
				<div className={clas.contBlockBack}>
					<span
						className={clas.BlockBlack}
						style={{
							width: `${100 / arrayPages.length - 8}%`,
							left: `${pageIndex * (100 / arrayPages.length) + 4}%`,
						}}
					></span>
					<ul className={clas.navBlock}>
						{arrayPages.map((page, index) => (
							<li
								key={index}
								onClick={() => setPageIndex(index)}
								className={clas.navItem}
								style={{
									color: pageIndex == index ? "#1c1c1c" : "#fff",
									animationDelay: `${index * 0.1 + 0.4}s`,
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
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
