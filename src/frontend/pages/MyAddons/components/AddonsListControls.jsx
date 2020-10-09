import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../../../components/UI/Layout/FlexBox";
import Spacer from "../../../components/UI/Layout/Spacer";
import PrimaryContainedButton from "../../../components/UI/Buttons/PrimaryContainedButton";
import UIToken from "../../../utils/UIToken";

const AddonsListControls = ({ scanUpdatesCb, scanFolderCb }) => {
	return (
		<FlexBox justifyContent="flex-end">
			<Spacer spacing={UIToken.spacingMd}>
				<PrimaryContainedButton onClick={scanUpdatesCb}>Scan for updates</PrimaryContainedButton>
				<PrimaryContainedButton onClick={scanFolderCb}>Refresh</PrimaryContainedButton>
			</Spacer>
		</FlexBox>
	);
};

AddonsListControls.propTypes = {
	scanUpdatesCb: PropTypes.func.isRequired,
	scanFolderCb: PropTypes.func.isRequired,
};
export default AddonsListControls;
