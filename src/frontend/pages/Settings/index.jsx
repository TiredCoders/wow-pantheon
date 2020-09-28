import React, { useCallback, useState } from "react";
import styled from "styled-components";
import H1 from "../../components/UI/Heading";
import Box from "../../components/UI/Layout/Box";
import UIToken from "../../utils/UIToken";
import OutlinedInput from "../../components/UI/Inputs/OutlinedInput";
import OutlinedButton from "../../components/UI/Buttons/OutlinedButton";
import { settings } from "../../utils/Client";
import FolderIcon from "@material-ui/icons/Folder";

const TableStyles = styled(Box)`
	table {
		width: 100%;
		border-collapse: collapse;
		tbody {
			tr {
				td:first-child {
					width: 200px;
				}
				td {
					padding: ${UIToken.spacingMd}px ${UIToken.spacingSm}px;
				}
			}
		}
	}
`;

const Settings = () => {
	// TODO: ALREADY SAVE VALUE SHOULD BE LOADED AS USESTATE ARG
	settings.get("wowpath").then((res) => console.log(res));

	const [wowPath, setWowPath] = useState();
	const onChangeWowPath = useCallback((e) => setWowPath(e.target.value), [setWowPath]);

	const onWowPathSave = useCallback(() => {
		// TODO: INSERT HERE CALLBACK TO BACKEND WITH WOW PATH VALUE
		console.log("Wow path value:", wowPath);
		settings.set("wowpath", wowPath).then((res) => console.log(res));
	}, [wowPath]);

	const onChoosePath = useCallback(() => {
		setWowPath("hola!");
	}, [setWowPath]);

	return (
		<Box color={UIToken.secondaryColor} fullWidth fullHeight padding={[UIToken.spacingLg]}>
			<H1>Settings</H1>
			<TableStyles fullWidth fullHeight margin={[UIToken.spacingMd, 0]}>
				<table>
					<tbody>
						<tr>
							<td>WoW path</td>
							<td>
								<OutlinedInput value={wowPath} onChange={onChangeWowPath} />
								<OutlinedButton onClick={onChoosePath} margin="0 25px 0 0">
									<FolderIcon />
								</OutlinedButton>
								<OutlinedButton onClick={onWowPathSave}>Save</OutlinedButton>
							</td>
						</tr>
					</tbody>
				</table>
			</TableStyles>
		</Box>
	);
};

export default Settings;
