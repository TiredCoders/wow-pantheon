import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "../UI/Layout/Nav";
import UIToken from "../../utils/UIToken";
import FlexBox from "../UI/Layout/FlexBox";
import Box from "../UI/Layout/Box";

const LinkBox = styled(Box)`
	a {
		font-size: ${UIToken.fontSizeMd};
		color: ${UIToken.secondaryColor};
		text-transform: uppercase;
		text-decoration: none;
		outline: none;
		cursor: pointer;

		&.active {
			border-bottom: 2px solid ${UIToken.secondaryColor};
		}
	}
`;

export default function Navbar() {
	return (
		<Nav
			className="Navbar"
			background={UIToken.primaryColor}
			fullWidth
			display="flex"
			justifyContent="space-between"
			borderWidth={[0, 0, 1]}
			borderColor={UIToken.secondaryColor}
			borderStyle="solid"
		>
			<FlexBox className="left-side">
				<LinkBox padding={[UIToken.spacingSm]}>
					<NavLink exact to="/">
						Logo
					</NavLink>
				</LinkBox>
				<LinkBox padding={[UIToken.spacingSm]}>
					<NavLink to="/my-addons">My addons</NavLink>
				</LinkBox>
				<LinkBox padding={[UIToken.spacingSm]}>
					<NavLink to="/explore">Explore</NavLink>
				</LinkBox>
			</FlexBox>
			<FlexBox className="right-side">
				<LinkBox padding={[UIToken.spacingSm]}>
					<NavLink to="/options">Options</NavLink>
				</LinkBox>
			</FlexBox>
		</Nav>
	);
}
