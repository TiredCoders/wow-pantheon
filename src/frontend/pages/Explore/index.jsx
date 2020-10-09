import React, { useCallback, useState } from "react";
import Box from "../../components/UI/Layout/Box";
import UIToken from "../../utils/UIToken";
import ExploreList from "./components/ExploreList";
import SearchForm from "./components/SearchForm";
import { H1 } from "../../components/UI/Heading";
import { addons } from "../../utils/Client";

const Explore = () => {
	const [loadingList, setLoadingList] = useState(false);
	const [addonsList, setAddonsList] = useState([]);
	const searchAddons = useCallback(
		(searchText) => {
			setLoadingList(true);
			addons.search(searchText).then((result) => {
				setAddonsList(result);
				setLoadingList(false);
			});
		},
		[setAddonsList, setLoadingList]
	);

	const installAddon = useCallback((row) => {
		console.log("Install Callback!", row);
		addons.install(row).then((result) => {
			console.log("Finish installation", result);
		});
	}, []);

	return (
		<>
			<Box padding={[0, UIToken.spacingSm]}>
				<H1>Explore</H1>
			</Box>
			<Box fullWidth padding={[UIToken.spacingSm]} boxSizing="border-box">
				<SearchForm onSubmitCallback={searchAddons} />
			</Box>
			<Box padding={[UIToken.spacingMd, 0]}>
				<ExploreList addonsList={addonsList} loading={loadingList} installCb={installAddon} />
			</Box>
		</>
	);
};

export default Explore;
