import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import OutlinedInput from "../../../components/UI/Inputs/OutlinedInput";
import OutlinedButton from "../../../components/UI/Buttons/OutlinedButton";

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
