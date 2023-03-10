import React from "react";
import { useSelector } from "react-redux";
import SplitTitle from "../../../usageComponents/SplitTitle/SplitTitle";
import clas from "./Tasks.module.css";
import TaskText from "./TaskText/TaskText";

const Tasks = () => {
	const arrayTasksTexsts = useSelector(state => state.input.tasks);
	return (
		<div className={clas.Tasks}>
			<SplitTitle text="Tasks" />
			{arrayTasksTexsts.map((item, index) => (
				<TaskText text={item.text} color={item.color} key={index} i={index} />
			))}
		</div>
	);
};

export default Tasks;
