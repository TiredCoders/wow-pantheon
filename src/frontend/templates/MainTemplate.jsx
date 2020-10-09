import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import FlexBox from "../components/UI/Layout/FlexBox";
import Box from "../components/UI/Layout/Box";
import Navbar from "../components/Navbar";
import ContentRouter from "../components/ContentRouter";
import UIToken from "../utils/UIToken";

const BoxScroll = styled(Box)`
	::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: transparent;
	}

	::-webkit-scrollbar {
		width: 12px;
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: ${UIToken.gray70};
	}
`;

const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${UIToken.gray90};
	}
`;

export const MainTemplate = () => (
	<>
		<GlobalStyles />
		<FlexBox direction="column" height="100%">
			<Navbar />
			<BoxScroll fullHeight overflow="auto" flexGrow={1}>
				<Box flexGrow={1} color={UIToken.gray10} background={UIToken.gray90} minHeight="100%">
					<ContentRouter />
				</Box>
			</BoxScroll>
		</FlexBox>
	</>
);

export default MainTemplate;
