import styled, { css } from "styled-components";

export const AnchorCss = css`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ color }) => color};
	text-transform: ${({ textTransform }) => textTransform};
	text-decoration: ${({ textDecoration = "none" }) => textDecoration};
	outline: ${({ outline = "none" }) => outline};
`;

export const Anchor = styled.a`
	${AnchorCss}
`;

export default Anchor;
