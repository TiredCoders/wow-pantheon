import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Box from "../../components/UI/Layout/Box";
import UIToken from "../../utils/UIToken";
import { AddonsList } from "./components/AddonsList";
import SearchForm from "./components/SearchForm";

import { addons } from "../../utils/Client";

const H1 = styled.h1`
	color: inherit;
	font-size: ${UIToken.fontSizeLg};
`;

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

	return (
		<Box color={UIToken.secondaryColor} fullWidth fullHeight padding={[UIToken.spacingLg]}>
			<H1>Explore</H1>
			<Box fullWidth>
				<SearchForm onSubmitCallback={searchAddons} />
			</Box>
			<Box fullWidth fullHeight margin={[UIToken.spacingMd, 0]}>
				<AddonsList addonsList={addonsList} loading={loadingList} />
			</Box>
		</Box>
	);
};

export default Explore;
