import React from "react";
import FlexBox from "../components/UI/Layout/FlexBox";
import Navbar from "../components/Navbar";
import ContentRouter from "../components/ContentRouter";
import UIToken from "../utils/UIToken";

export const MainTemplate = () => (
	<FlexBox direction="column" height="100%">
		<Navbar />
		<FlexBox background={UIToken.tertiaryColor} flexGrow={1}>
			<ContentRouter />
		</FlexBox>
	</FlexBox>
);

export default MainTemplate;
