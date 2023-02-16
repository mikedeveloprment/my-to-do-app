import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import * as ReactDOMClient from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import "./index.css";
import { store } from "./redux/store";
import CreateCart1Step from "./components/Wrapper/Pages/CreateCart1Step/CreateCart1Step";
import PageStart from "./components/Wrapper/Pages/PageStart/PageStart";
import Tasks from "./components/Wrapper/Pages/Tasks/Tasks";

export default function App() {
	const element = useRoutes([
		{
			path: "/",
			element: <Wrapper />,
			children: [
				{
					path: "/home",
					element: <PageStart />,
				},
				{
					path: "/",
					element: <PageStart />,
				},
				{
					path: "/1step",
					element: <CreateCart1Step />,
				},
				{
					path: "/tasks",
					element: <Tasks />,
				},
			],
		},
	]);

	const location = useLocation();

	if (!element) return null;

	return (
		<AnimatePresence mode="wait" initial={false}>
			{React.cloneElement(element, { key: location.pathname })}
		</AnimatePresence>
	);
}

function AppWithUI() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
