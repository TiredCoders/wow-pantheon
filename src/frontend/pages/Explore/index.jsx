import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Box from "../../components/UI/Layout/Box";
import FlexBox from "../../components/UI/Layout/FlexBox";
import mockAddonsList from "../../mocks/mockAddonsList";
import UIToken from "../../utils/UIToken";
import { AddonsList } from "./components/AddonsList";
import SearchForm from "./components/SearchForm";

const H1 = styled.h1`
	color: inherit;
	font-size: ${UIToken.fontSizeLg};
`;

const Explore = () => {
	const [loadingList, setLoadingList] = useState(false);
	const [addonsList, setAddonsList] = useState([]);
	const searchAddons = useCallback(() => {
		const response = new Promise((resolve) => {
			setLoadingList(true);
			setTimeout(() => resolve(), 1000);
		});
		response.then(() => {
			setAddonsList(mockAddonsList);
			setLoadingList(false);
		});
	}, [setAddonsList]);

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
