import styled from "styled-components";
import UIToken from "../../../utils/UIToken";

const OutlinedInput = styled.input`
	outline: none;
	background-color: transparent;
	border: 1px solid ${UIToken.secondaryColor};
	color: ${UIToken.secondaryColor};
	padding: ${UIToken.spacingMd}px;
	font-size: ${UIToken.fontSizeMd};
`;

export default OutlinedInput;
