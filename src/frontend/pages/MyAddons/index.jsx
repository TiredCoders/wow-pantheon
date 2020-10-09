import React, { useCallback, useEffect, useState } from "react";
import Box from "../../components/UI/Layout/Box";
import FlexBox from "../../components/UI/Layout/FlexBox";
import { H1 } from "../../components/UI/Heading";
import UIToken from "../../utils/UIToken";
import MyAddonsList from "./components/MyAddonsList";
import { addons } from "../../utils/Client";
import AddonsListControls from "./components/AddonsListControls";

const MyAddons = () => {
	const [addonsList, setAddonsList] = useState([]);
	const [loadingList, setLoadingList] = useState();

	useEffect(() => {
		setLoadingList(true);
		addons
			.list()
			.then((res) => {
				setLoadingList(false);
				setAddonsList(res);
				// return addons.searchForUpdates();
			})
			.then(() => {
				console.log("DONE");
			});
	}, []);

	const scanUpdates = useCallback(() => {
		console.log("scan updates");
		addons.searchForUpdates().then((res) => {
			console.log(res);
		});
	}, []);

	const scanFolder = useCallback(() => {
		console.log("scan folder!");
	}, []);

	return (
		<>
			<FlexBox padding={[0, UIToken.spacingSm]} direction="column">
				<Box>
					<H1>My Addons</H1>
				</Box>
				<AddonsListControls scanUpdatesCb={scanUpdates} scanFolderCb={scanFolder} />
			</FlexBox>
			<Box fullWidth fullHeight margin={[UIToken.spacingSm, 0]}>
				<MyAddonsList addonsList={addonsList} loading={loadingList} />
			</Box>
		</>
	);
};

export default MyAddons;
