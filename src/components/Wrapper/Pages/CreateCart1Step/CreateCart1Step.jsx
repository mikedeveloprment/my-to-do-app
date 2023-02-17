import React from "react";
import SplitTitle from "../../../usageComponents/SplitTitle/SplitTitle";
import BlockSelectBG from "./BlockSelectBG/BlockSelectBG";
import clas from "./CreateCart1Step.module.css";

const CreateCart1Step = () => {
	return (
		<div className={clas.step1CreateBg}>
			<SplitTitle text="Select-background" />
			<BlockSelectBG />
		</div>
	);
};

export default CreateCart1Step;
