import styled from "styled-components";
import UIToken from "../../../utils/UIToken";

const OutlinedButton = styled.button`
	padding: ${UIToken.spacingMd}px;
	font-size: ${UIToken.fontSizeMd};
	svg {
		font-size: 14px;
	}
	border: 1px solid ${UIToken.secondaryColor};
	outline: none;
	cursor: pointer;
	background-color: ${UIToken.secondaryColor};
	margin: ${({ margin }) => margin};
`;

export default OutlinedButton;
