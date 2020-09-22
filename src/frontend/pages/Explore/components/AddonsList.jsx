import React from "react";
import PropTypes from "prop-types";
import Box from "../../../components/UI/Layout/Box";
import UIToken from "../../../utils/UIToken";

export const AddonsList = ({ addonsList, loading }) => {
	return "hello";
};

AddonsList.propTypes = {
	addonsList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			installedVersion: PropTypes.number.isRequired,
			version: PropTypes.number.isRequired,
		})
	),
};
