import React from "react";
import { Route, Switch } from "react-router-dom";
import MyAddons from "../../pages/MyAddons";
import Explore from "../../pages/Explore";
import Home from "../../pages/Home";
import Options from "../../pages/Options";

const ContentRouter = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/my-addons" component={MyAddons} />
		<Route path="/explore" component={Explore} />
		<Route path="/options" component={Options} />
	</Switch>
);

export default ContentRouter;
