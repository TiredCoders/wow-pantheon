import React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import Box from "../../../components/UI/Layout/Box";
import UIToken from "../../../utils/UIToken";
import columns from "./columns";
import styled from "styled-components";

const StyledBox = styled(Box)`
	table {
		border-collapse: collapse;
		width: 100%;
		tr {
			border-bottom: 2px solid ${UIToken.secondaryColor};

			td,
			th {
				text-align: left;
				padding: ${UIToken.spacingMd}px;
			}
		}
	}
`;

export const AddonsList = ({ addonsList, loading = false }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data: addonsList,
	});
	return (
		<StyledBox>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Author</th>
						<th>Installed version</th>
						<th>Version</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
								})}
								<td>Action</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</StyledBox>
	);
};

AddonsList.propTypes = {
	addonsList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			installedVersion: PropTypes.string.isRequired,
			version: PropTypes.string.isRequired,
		})
	).isRequired,
	loading: PropTypes.bool,
};

AddonsList.defaultProps = {
	loading: false,
};

export default AddonsList;
