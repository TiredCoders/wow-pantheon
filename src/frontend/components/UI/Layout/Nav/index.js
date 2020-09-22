import styled from "styled-components";
import BaseLayoutCss, { LayoutPropTypes, LayoutPropDefault } from "../BaseLayoutCss";

export const Nav = styled.nav`
	${BaseLayoutCss}
`;

Nav.propTypes = LayoutPropTypes;

Nav.defaultProps = LayoutPropDefault;

export default Nav;
