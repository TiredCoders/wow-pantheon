import styled from "styled-components";
import UIToken from "../../../utils/UIToken";

const OutlinedButton = styled.button`
	padding: ${({ padding, unit = "px" }) =>
		(padding && (Array.isArray(padding) ? padding.join(`${unit} `) + unit : `${padding}`)) || `${UIToken.spacingMd}px`};
	font-size: ${UIToken.fontSizeMd};

	svg {
		font-size: 14px;
	}

	border: ${({ border }) => border || `1px solid ${UIToken.primary10}`};
	outline: none;
	cursor: pointer;
	background-color: ${({ backgroundColor }) => backgroundColor || UIToken.primary10};
	margin: ${({ margin }) => margin};
	border-radius: ${({ borderRadius }) => borderRadius};

	display: ${({ display }) => display};
	align-items: ${({ alignItems }) => alignItems};
	position: ${({ position }) => position};
	top: ${({ top }) => top};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	height: ${({ height }) => height};
`;

const OutlininedButtonWithIcon = styled(OutlinedButton)``;
export default OutlinedButton;
