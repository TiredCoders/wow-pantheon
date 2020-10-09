import React, { useCallback, useEffect, useState } from "react";
import FolderIcon from "@material-ui/icons/Folder";
import styled from "styled-components";
import H1 from "../../components/UI/Heading";
import FlexBox from "../../components/UI/Layout/FlexBox";
import Box from "../../components/UI/Layout/Box";
import UIToken from "../../utils/UIToken";
import { OutlinedInputWIcon } from "../../components/UI/Inputs/OutlinedInput";
import OutlinedButton from "../../components/UI/Buttons/OutlinedButton";
import { settings, dialog } from "../../utils/Client";
import PrimaryContainedButton from "../../components/UI/Buttons/PrimaryContainedButton";

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
			<Box padding={[0, UIToken.spacingSm]}>
				<H1>Settings</H1>
			</Box>
			<TableStyles fullWidth fullHeight margin={[UIToken.spacingMd, 0]}>
				<table>
					<tbody>
						<tr>
							<td>WoW path</td>
							<td>
								<FlexBox alignItems="center">
									<OutlinedInputWIcon value={wowPath} onChange={onChangeWowPath} />
									<Box
										padding={[5, 10]}
										onClick={onChoosePath}
										margin="0 25px 0 0"
										position="relative"
										left="-40px"
										backgroundColor="transparent"
										border="0"
										height="30px"
										display="flex"
										alignItems="center"
										fontSize="14px"
										color={UIToken.gray90}
										cursor="pointer"
									>
										<FolderIcon />
									</Box>
								</FlexBox>
							</td>
						</tr>
					</tbody>
				</table>
			</TableStyles>
			<Box padding={[UIToken.spacingSm]}>
				<PrimaryContainedButton onClick={onWowPathSave}>Save</PrimaryContainedButton>
			</Box>
		</>
	);
};

export default Settings;
