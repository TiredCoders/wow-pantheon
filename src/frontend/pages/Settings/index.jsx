import React from "react";
import styled from "styled-components";
import H1 from "../../components/UI/Heading";
import Box from "../../components/UI/Layout/Box";
import UIToken from "../../utils/UIToken";
import OutlinedInput from "../../components/UI/Inputs/OutlinedInput";
import OutlinedButton from "../../components/UI/Buttons/OutlinedButton";

const TableStyles = styled(Box)`
	table {
		width: 100%;
		border-collapse: collapse;
		tbody {
			tr {
				background-color: 
				border-bottom: 2px solid ${UIToken.secondaryColor};
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
	return (
		<Box color={UIToken.secondaryColor} fullWidth fullHeight padding={[UIToken.spacingLg]}>
			<H1>Settings</H1>
			<TableStyles fullWidth fullHeight margin={[UIToken.spacingMd, 0]}>
				<table>
					<tbody>
						<tr>
							<td>WoW path</td>
							<td>
								<OutlinedInput />
								<OutlinedButton>Edit</OutlinedButton>
							</td>
						</tr>
					</tbody>
				</table>
			</TableStyles>
		</Box>
	);
};

export default Settings;
