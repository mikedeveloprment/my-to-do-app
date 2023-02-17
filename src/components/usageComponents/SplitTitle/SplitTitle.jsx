import React from "react";
import clas from "./SplitTitle.module.css";

const SplitTitle = ({ text = "don't title" }) => {
	const textSplit = `${text}`;
	const textSplitArray = textSplit.split("");
	return (
		<div className={clas.header}>
			<h1 className={clas.splitText}>
				{textSplitArray.map((letter, index) =>
					letter === " " ? (
						<span
							className={clas.splitLetter}
							style={{
								animationDelay: `${index * 0.05 + 0.2}s`,
							}}
							key={index}
						>
							&nbsp;
						</span>
					) : letter === "-" ? (
						<br key={index} />
					) : (
						<span
							className={clas.splitLetter}
							style={{
								animationDelay: `${index * 0.04 + 0.6}s`,
							}}
							key={index}
						>
							{letter}
						</span>
					)
				)}
			</h1>
		</div>
	);
};

export default SplitTitle;
