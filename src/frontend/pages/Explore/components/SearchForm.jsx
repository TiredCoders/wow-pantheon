import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import OutlinedInput from "../../../components/UI/Inputs/OutlinedInput";

const SearchForm = ({ onSubmitCallback }) => {
	const [searchText, setSearchText] = useState();
	const onChange = useCallback((e) => setSearchText(e.target.value), [setSearchText]);
	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			onSubmitCallback(searchText);
		},
		[onSubmitCallback, searchText]
	);

	return (
		<form onSubmit={onSubmit}>
			<OutlinedInput onChange={onChange} placeholder="Search addon..." />
			{/* <OutlinedButton type="submit">Search</OutlinedButton> */}
		</form>
	);
};

SearchForm.propTypes = {
	onSubmitCallback: PropTypes.func.isRequired,
};

export default SearchForm;
