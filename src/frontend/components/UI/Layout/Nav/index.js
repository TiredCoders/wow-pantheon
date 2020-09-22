import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import BaseLayoutCss, { LayoutPropTypes, LayoutPropDefault } from "../BaseLayoutCss";

export const Nav = styled.nav`
	${BaseLayoutCss}
`;

Nav.propTypes = LayoutPropTypes;

Nav.defaultProps = LayoutPropDefault;

export default Nav;
