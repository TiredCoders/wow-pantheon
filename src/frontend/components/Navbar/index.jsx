import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import Nav from "../UI/Layout/Nav";
import UIToken from "../../utils/UIToken";
import FlexBox from "../UI/Layout/FlexBox";
import Box from "../UI/Layout/Box";

const LogoBox = styled(Box)`
	font-family: Roboto;
	align-self: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 22px;
	color: ${UIToken.primary10};
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
			color: ${UIToken.primary10};
		}

		text-decoration: none;
		outline: none;
		cursor: pointer;

		&.active {
			color: ${UIToken.primary10};
		}

		transition: color 0.2s ease-in-out;
	}
`;

export default function Navbar() {
	return (
		<Nav
			className="Navbar"
			background={UIToken.primary90}
			fullWidth
			display="flex"
			justifyContent="space-between"
			padding={[UIToken.paddingXxs, UIToken.paddingLg]}
			height="61px"
		>
			<FlexBox className="left-side" flexGrow={1}>
				<LinkBox padding={[UIToken.spacingXxs]}>
					<NavLink to="/app/my-addons">
						<FormatListBulletedOutlinedIcon />
						<span>Addons</span>
					</NavLink>
				</LinkBox>
				<LinkBox padding={[UIToken.spacingXxs]}>
					<NavLink to="/app/explore">
						<ExploreOutlinedIcon />
						<span>Explore</span>
					</NavLink>
				</LinkBox>
			</FlexBox>
			<FlexBox className="center-side" flexGrow={1} justifyContent="center">
				<LogoBox>Pantheon</LogoBox>
			</FlexBox>
			<FlexBox className="right-side" flexGrow={1} justifyContent="flex-end">
				<LinkBox padding={[UIToken.spacingXxs]}>
					<NavLink to="/app/settings">
						<SettingsIcon />
						<span>Settings</span>
					</NavLink>
				</LinkBox>
			</FlexBox>
		</Nav>
	);
}
