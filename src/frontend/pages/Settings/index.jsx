import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import H1 from "../../components/UI/Heading";
import Box from "../../components/UI/Layout/Box";
import UIToken from "../../utils/UIToken";
import OutlinedInput from "../../components/UI/Inputs/OutlinedInput";
import OutlinedButton from "../../components/UI/Buttons/OutlinedButton";
import { settings, dialog } from "../../utils/Client";
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
	const [wowPath, setWowPath] = useState("");

	useEffect(() => {
		settings.get("wowpath").then((res) => setWowPath(res));
	}, []);

	const onChangeWowPath = useCallback((e) => setWowPath(e.target.value), [setWowPath]);

	const onWowPathSave = useCallback(() => {
		// TODO: INSERT HERE CALLBACK TO BACKEND WITH WOW PATH VALUE
		console.log("Wow path value:", wowPath);
		settings.set("wowpath", wowPath);
	}, [wowPath]);

	const onChoosePath = useCallback(() => {
		dialog
			.getDir("Select WoW directory", "Select")
			.then((path) => {
				return path ? path : "";
			})
			.then((path) => {
				setWowPath(path);
			});
	}, [setWowPath]);

	return (
		<>
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
		</>
	);
};

export default Settings;
