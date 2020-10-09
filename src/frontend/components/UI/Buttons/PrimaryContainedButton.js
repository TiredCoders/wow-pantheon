import styled from "styled-components";
import UIToken from "../../../utils/UIToken";

const PrimaryContainedButton = styled.button`
	cursor: pointer;
	padding: ${UIToken.spacingSm}px ${UIToken.spacingMd}px;
	border: 0;
	color: ${UIToken.primary10};
	background-color: ${UIToken.primary50};
	font-size: ${UIToken.fontSizeMd};
	outline: none;
`;

export default PrimaryContainedButton;
