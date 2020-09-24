import React, { useEffect, useState } from "react";
import Box from "../../components/UI/Layout/Box";
import { H1 } from "../../components/UI/Heading";
import UIToken from "../../utils/UIToken";
import MyAddonsList from "./components/MyAddonsList";
import mockAddonsList from "../../mocks/mockAddonsList";

const MyAddons = () => {
	const [addonsList, setAddonsList] = useState([]);
	const [loadingList, setLoadingList] = useState();

	useEffect(() => {
		setLoadingList(true);
		const response = new Promise((resolve) => setTimeout(() => resolve(), 1000));
		response.then(() => {
			setLoadingList(false);
			setAddonsList(mockAddonsList);
		});
	}, []);

	return (
		<Box color={UIToken.secondaryColor} fullWidth fullHeight padding={[UIToken.spacingLg]}>
			<H1>Explores</H1>
			<Box fullWidth fullHeight margin={[UIToken.spacingMd, 0]}>
				<MyAddonsList addonsList={addonsList} loading={loadingList} />
			</Box>
		</Box>
	);
};

export default MyAddons;
