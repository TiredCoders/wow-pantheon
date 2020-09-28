import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import styled from "styled-components";
import Box from "../../../components/UI/Layout/Box";
import UIToken from "../../../utils/UIToken";
import columns from "./columns";
import ExploreListRow from "./ExploreListRow";

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

export const ExploreList = ({ addonsList, installCb, loading = false }) => {
	const { rows, prepareRow } = useTable({
		columns,
		data: addonsList,
	});

	const onInstall = useCallback((row) => installCb(row), [installCb]);
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
							return <ExploreListRow row={row} onInstall={onInstall} key={row.id} />;
						})}
					</tbody>
				</table>
			</StyledBox>
		</>
	);
};

ExploreList.propTypes = {
	addonsList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			installedVersion: PropTypes.string.isRequired,
			version: PropTypes.string.isRequired,
		})
	).isRequired,
	installCb: PropTypes.func.isRequired,
	loading: PropTypes.bool,
};

ExploreList.defaultProps = {
	loading: false,
};

export default ExploreList;