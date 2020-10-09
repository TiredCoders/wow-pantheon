import React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import styled from "styled-components";
import Box from "../../../components/UI/Layout/Box";
import columns from "./MyAddonsListColumns";
import TableStyles from "../../../components/UI/Table/TableStyles";

const StyledBox = styled(Box)`
	${TableStyles}
`;

export const MyAddonsList = ({ addonsList, loading = false }) => {
	const { rows, prepareRow } = useTable({
		columns,
		data: addonsList,
	});
	return (
		<>
			{loading && "is loading..."}
			<StyledBox>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Author</th>
							<th>Installed version</th>
							<th>Version</th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => {
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
		</>
	);
};

MyAddonsList.propTypes = {
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

MyAddonsList.defaultProps = {
	loading: false,
};

export default MyAddonsList;
