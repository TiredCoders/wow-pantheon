import React from "react";
import { Route, Switch } from "react-router-dom";
import MyAddons from "../../pages/MyAddons";
import Explore from "../../pages/Explore";
import Home from "../../pages/Home";
import Settings from "../../pages/Settings";

const ContentRouter = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/my-addons" component={MyAddons} />
		<Route path="/explore" component={Explore} />
		<Route path="/settings" component={Settings} />
	</Switch>
);

export default ContentRouter;
