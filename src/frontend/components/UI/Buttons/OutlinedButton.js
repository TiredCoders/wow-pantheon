import styled from "styled-components";
import UIToken from "../../../utils/UIToken";

const OutlinedButton = styled.button`
	padding: ${UIToken.spacingMd}px;
	font-size: ${UIToken.fontSizeMd};
	border: 1px solid ${UIToken.secondaryColor};
	outline: none;
	cursor: pointer;
	background-color: ${UIToken.secondaryColor};
`;

export default OutlinedButton;
