import styled from "styled-components";
import FlexBox from "../FlexBox";

const CentralizedOverlay = styled(FlexBox)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	justify-content: center;
	align-items: center;
`;

export default CentralizedOverlay;
