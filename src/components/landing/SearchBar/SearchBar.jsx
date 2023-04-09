import PropTypes from "prop-types"

import { SearchBarContainer, AmountDisplay, Input } from "./SearchBar.styles"

const SearchBar = ({ amount, handleSearch }) => {
	return (
		<SearchBarContainer>
			<AmountDisplay> {amount} </AmountDisplay>
			<Input placeholder="Filter podcasts..." onChange={handleSearch} />
		</SearchBarContainer>
	)
}

SearchBar.defaultProps = {
	amount: null,
}

SearchBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	amount: PropTypes.number,
}

export default SearchBar
