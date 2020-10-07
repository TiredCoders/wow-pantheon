import React from "react";
import FlexBox from "../components/UI/Layout/FlexBox";
import Box from "../components/UI/Layout/Box";
import Navbar from "../components/Navbar";
import ContentRouter from "../components/ContentRouter";
import UIToken from "../utils/UIToken";
import styled, { createGlobalStyle } from "styled-components";

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
		background-color: ${UIToken.primary10};
	}
`;

const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${UIToken.primary70};
	}

	::-webkit-scrollbar-track {
		background-color:red;
	}
`;

export const MainTemplate = () => (
	<>
		<GlobalStyles />
		<FlexBox direction="column" height="100%">
			<Navbar />
			<BoxScroll fullHeight overflow="auto">
				<Box
					flexGrow={1}
					color={UIToken.primary10}
					background={UIToken.primary70}
					padding={[UIToken.spacingMd]}
					minHeight="calc(100% - 31px)"
				>
					<ContentRouter />
				</Box>
			</BoxScroll>
		</FlexBox>
	</>
);

export default MainTemplate;
