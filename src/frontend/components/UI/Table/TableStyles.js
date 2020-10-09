import { css } from "styled-components";
import UIToken from "../../../utils/UIToken";

const TableStyles = css`
	overflow: auto;
	table {
		border-collapse: collapse;
		width: 100%;
		thead {
			tr {
				background-color: ${UIToken.gray70};
			}
		}
		tbody {
			tr {
				border-bottom: 1px solid ${UIToken.gray80};
			}
		}
		tr {
			td,
			th {
				text-align: left;
				padding: ${UIToken.spacingSm}px;
			}
			td {
				padding: ${UIToken.spacingMd}px;
			}
		}
	}
`;

export default TableStyles;
