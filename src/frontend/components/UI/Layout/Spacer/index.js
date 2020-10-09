import styled, { css } from "styled-components";
import FlexBox from "../FlexBox";

const Spacer = styled(FlexBox)`
	> *:not(:last-child) {
		${({ direction = "row", spacing }) => css`
      margin-${direction === "row" ? "right" : "bottom"}: ${spacing}px;
    `}
	}
`;

export default Spacer;
