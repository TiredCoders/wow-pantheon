import React, { useEffect, useState } from "react";
import Box from "../../components/UI/Layout/Box";
import { H1 } from "../../components/UI/Heading";
import UIToken from "../../utils/UIToken";
import MyAddonsList from "./components/MyAddonsList";
import { addons } from "../../utils/Client";

const MyAddons = () => {
	const [addonsList, setAddonsList] = useState([]);
	const [loadingList, setLoadingList] = useState();

	useEffect(() => {
		setLoadingList(true);
		addons.list().then((res) => {
			setLoadingList(false);
			setAddonsList(res);
			return addons.searchForUpdates();
		}).then(() => {
			console.log('DONE');
		});
	}, []);

	return (
		<>
			<H1>My Addons</H1>
			<Box fullWidth fullHeight margin={[UIToken.spacingMd, 0]}>
				<MyAddonsList addonsList={addonsList} loading={loadingList} />
			</Box>
		</>
	);
};

export default MyAddons;
