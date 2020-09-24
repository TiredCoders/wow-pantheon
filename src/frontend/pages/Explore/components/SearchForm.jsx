import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UIToken from "../../../utils/UIToken";

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
	const [searchText, setSearchText] = useState();
	const onChange = useCallback((e) => setSearchText(e.target.value), [setSearchText]);
	const onClick = useCallback(() => onSubmitCallback(searchText), [onSubmitCallback, searchText]);
	return (
		<>
			<OutlinedInput onChange={onChange} placeholder="Search for an addon..." />
			<OutlinedButton onClick={onClick}>Search</OutlinedButton>
		</>
	);
};

SearchForm.propTypes = {
	onSubmitCallback: PropTypes.func.isRequired,
};

export default SearchForm;
