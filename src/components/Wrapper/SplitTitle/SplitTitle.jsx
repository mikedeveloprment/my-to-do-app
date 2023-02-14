import React from "react";
import clas from "./SplitTitle.module.css";

const SplitTitle = () => {
	const textSplit = "Create Tasks-Card";
	const textSplitArray = textSplit.split("");
	console.log(textSplitArray);
	return (
		<div className={clas.header}>
			<p className={clas.splitText}>
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
						<br />
					) : (
						<span
							className={clas.splitLetter}
							style={{
								animationDelay: `${index * 0.04 + 0.2}s`,
							}}
							key={index}
						>
							{letter}
						</span>
					)
				)}
			</p>
		</div>
	);
};

export default SplitTitle;
