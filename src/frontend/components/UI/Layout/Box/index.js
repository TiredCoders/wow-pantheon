import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Box = styled.div`
	background: ${({ background }) => background};
	color: ${({ color }) => color};
	z-index: ${({ elevation }) => elevation};
	display: ${({ display }) => display};
	position: ${({ position }) => position};
	overflow: ${({ overflow }) => overflow};
	transition: ${({ transition }) => transition};
	visibility: ${({ visibility }) => visibility};
	opacity: ${({ opacity }) => opacity};

	padding: ${({ padding, unit }) =>
		padding && (Array.isArray(padding) ? padding.join(`${unit} `) + unit : `${padding}`)};
	margin: ${({ margin, unit }) => margin && (Array.isArray(margin) ? margin.join(`${unit} `) + unit : `${margin}`)};
	box-sizing: ${({ boxSizing }) => boxSizing};
	height: ${({ height }) => height};
	min-height: ${({ minHeight }) => minHeight};
	max-height: ${({ maxHeight }) => maxHeight};
	width: ${({ width }) => width};
	min-width: ${({ minWidth }) => minWidth};
	max-width: ${({ maxWidth }) => maxWidth};
	top: ${({ top }) => top};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	right: ${({ right }) => right};

	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};
	flex-direction: ${({ direction }) => direction};
	flex-wrap: ${({ flexWrap }) => flexWrap};
	flex-grow: ${({ flexGrow }) => flexGrow};
	flex-shrink: ${({ flexShrink }) => flexShrink};
	flex-basis: ${({ flexBasis }) => flexBasis};

	border: ${({ border }) => border};
	border-width: ${({ borderWidth, borderUnit }) =>
		!Array.isArray(borderWidth) ? borderWidth : borderWidth.join(`${borderUnit} `) + borderUnit};

	border-radius: ${({ borderRadius }) => borderRadius};
	border-color: ${({ borderColor }) => borderColor};
	border-style: ${({ borderStyle }) => borderStyle};

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
	${({ fullHeight }) =>
		fullHeight &&
		css`
			height: 100%;
		`}
`;

Box.propTypes = {
	/** Sets the CSS background property */
	background: PropTypes.string,
	/** Sets the CSS color property */
	color: PropTypes.string,
	/** z-index value */
	elevation: PropTypes.number,
	/** Sets the CSS display property */
	display: PropTypes.string,
	/** Sets the CSS position property */
	position: PropTypes.string,
	/** Sets the CSS overflow property */
	overflow: PropTypes.oneOf(["visible", "hidden", "scroll", "auto", "initial", "inherit"]),
	/** Sets the CSS transition property */
	transition: PropTypes.string,
	/** Sets the CSS opacity property */
	visibility: PropTypes.oneOf(["visible", "hidden", "collapse", "unset", "inherit", "initial"]),
	/** Sets the CSS visibility property */
	opacity: PropTypes.number,
	/** Padding to be applied in the Box, if used with array, unit prop must be specified */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.number)]),
	/** Margin to be applied in the Box, if used with array, unit prop must be specified */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.number)]),
	boxSizing: PropTypes.oneOf(["border-box", "content-box", "initial", "inherit"]),
	/** Unit applied to any of the Box properties in case of Array usage */
	unit: PropTypes.oneOf(["px", "em"]),
	/** Height applied to the box */
	height: PropTypes.string,
	/** min-height applied to the box */
	minHeight: PropTypes.string,
	/** max-width applied to the box */
	maxHeight: PropTypes.string,
	/** Width applied to the box */
	width: PropTypes.string,
	/** min-width applied to the box */
	minWidth: PropTypes.string,
	/** Max-Width applied to the box */
	maxWidth: PropTypes.string,
	/** Horizontally justify  its content - requires display: flex */
	justifyContent: PropTypes.oneOf([
		"flex-end",
		"flex-start",
		"center",
		"space-between",
		"space-around",
		"initial",
		"inherit",
	]),
	/** Vertically justify its content - requires display: flex */
	alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center", "baseline ", "stretch"]),
	/** Define content's layout direction */
	direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse", "initial", "inherit"]),
	/** Define if the content should wrap, wrap in reverse direction or not wrap at all */
	flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
	/** Defines flex grow index */
	flexGrow: PropTypes.number,
	/** Defines flex grow shrink */
	flexShrink: PropTypes.number,
	/** Defines flex basis index */
	flexBasis: PropTypes.string,
	/** If true, will take 100% width */
	fullWidth: PropTypes.bool,
	/** If true, will take 100% height */
	fullHeight: PropTypes.bool,
	/** Sets the border radius of the Box */
	borderRadius: PropTypes.string,
};

Box.defaultProps = {
	unit: "px",
};

export default Box;
