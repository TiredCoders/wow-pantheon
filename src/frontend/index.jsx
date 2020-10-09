import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import "./global.less";
import App from "./components/App";

document.addEventListener(
	"dragover",
	(e) => {
		e.preventDefault();
		return false;
	},
	false
);

document.addEventListener(
	"drop",
	(e) => {
		e.preventDefault();
		return false;
	},
	false
);

ReactDOM.render(
	<MemoryRouter initialEntries={["/app/my-addons"]}>
		<App />
	</MemoryRouter>,
	document.getElementById("root")
);
