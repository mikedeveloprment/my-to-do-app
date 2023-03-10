import React from "react";
import SplitTitle from "../../../usageComponents/SplitTitle/SplitTitle";
import clas from "./CreateCart2Step.module.css";
import Task from "./Task/Task";

const CreateCart2Step = () => {
	return (
		<div className={clas.step2CreateInfo}>
			<SplitTitle text="Write text" />
			<Task />
		</div>
	);
};

export default CreateCart2Step;
