import React, { useCallback } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";

const ExploreListRow = ({ row, onInstall }) => {
	const onClick = useCallback(() => {
		onInstall(row.original);
	}, [row, onInstall]);

	return (
		<tr {...row.getRowProps()}>
			{row.cells.map((cell) => {
				return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
			})}
			<td>
				<GetAppIcon onClick={onClick} />
			</td>
		</tr>
	);
};

export default React.memo(ExploreListRow);
