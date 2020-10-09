import styled from "styled-components";
import UIToken from "../../../utils/UIToken";

const OutlinedInput = styled.input`
	box-sizing: border-box;
	outline: none;
	background-color: ${UIToken.gray30};
	border: 1px solid ${UIToken.gray10};
	color: ${UIToken.gray90};
	padding: ${UIToken.spacingSm}px ${UIToken.spacingMd}px;
	font-size: ${UIToken.fontSizeSm};
	border-radius: ${({ borderRadius }) => borderRadius};
	height: ${({ height }) => height};
`;

export const OutlinedInputWIcon = styled(OutlinedInput)`
	padding-right: 50px;
`;

export default OutlinedInput;
