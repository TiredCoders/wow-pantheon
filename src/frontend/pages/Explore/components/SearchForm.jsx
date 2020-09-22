import React from "react";
import styled from "styled-components";
import UIToken from "../../../utils/UIToken";
import PropTypes from "prop-types";

const OutlinedInput = styled.input`
	outline: none;
	background-color: transparent;
	border: 1px solid ${UIToken.secondaryColor};
	color: ${UIToken.secondaryColor};
	padding: ${UIToken.spacingMd}px;
	font-size: ${UIToken.fontSizeMd};
`;

const OutlinedButton = styled.button`
	padding: ${UIToken.spacingMd}px;
	font-size: ${UIToken.fontSizeMd};
	border: 1px solid ${UIToken.secondaryColor};
	outline: none;
	cursor: pointer;
	background-color: ${UIToken.secondaryColor};
`;

const SearchForm = ({ onSubmitCallback }) => {
	return (
		<>
			<OutlinedInput placeholder="Search for an addon..." />
			<OutlinedButton onClick={onSubmitCallback}>Search</OutlinedButton>
		</>
	);
};

SearchForm.propTypes = {
	onSubmitCallback: PropTypes.func.isRequired,
};

export default SearchForm;
