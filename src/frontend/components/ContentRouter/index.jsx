import React from "react";
import { Route, Switch } from "react-router-dom";
import MyAddons from "../../pages/MyAddons";
import Explore from "../../pages/Explore";
import Home from "../../pages/Home";
import Settings from "../../pages/Settings";

const ContentRouter = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/app/my-addons" component={MyAddons} />
		<Route path="/app/explore" component={Explore} />
		<Route path="/app/settings" component={Settings} />
	</Switch>
);

export default ContentRouter;
