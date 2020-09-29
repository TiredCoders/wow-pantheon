import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "../UI/Layout/Nav";
import UIToken from "../../utils/UIToken";
import FlexBox from "../UI/Layout/FlexBox";
import Box from "../UI/Layout/Box";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SettingsIcon from "@material-ui/icons/Settings";

const LogoBox = styled(Box)`
	font-family: Roboto;
	align-self: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 22px;
	color: ${UIToken.secondaryColor};
`;

const LinkBox = styled(Box)`
	a {
		font-family: Roboto;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		svg {
			font-size: 22px;
			margin-bottom: 3px;
		}
		span {
			font-size: 13px;
		}

		:hover {
			color: ${UIToken.secondaryColor};
		}

		text-decoration: none;
		outline: none;
		cursor: pointer;

		&.active {
			color: ${UIToken.secondaryColor};
		}

		transition: color 0.2s ease-in-out;
	}
`;

export default function Navbar() {
	return (
		<Nav
			className="Navbar"
			background={UIToken.neutralDark}
			fullWidth
			display="flex"
			justifyContent="space-between"
			borderWidth={[0, 0, 1]}
			borderColor={UIToken.secondaryColor}
			borderStyle="solid"
			padding={[UIToken.paddingXxs, UIToken.paddingLg]}
			height="61px"
		>
			<FlexBox className="left-side">
				<LinkBox padding={[UIToken.spacingXxs]}>
					<NavLink to="/my-addons">
						<FormatListBulletedOutlinedIcon />
						<span>Addons</span>
					</NavLink>
				</LinkBox>
				<LinkBox padding={[UIToken.spacingXxs]}>
					<NavLink to="/explore">
						<ExploreOutlinedIcon />
						<span>Explore</span>
					</NavLink>
				</LinkBox>
			</FlexBox>
			<FlexBox className="center-side">
				<LogoBox>Pantheon</LogoBox>
			</FlexBox>
			<FlexBox className="right-side">
				<LinkBox padding={[UIToken.spacingXxs]}>
					<NavLink to="/settings">
						<SettingsIcon />
						<span>Settings</span>
					</NavLink>
				</LinkBox>
			</FlexBox>
		</Nav>
	);
}
