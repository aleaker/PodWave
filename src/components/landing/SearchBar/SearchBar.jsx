import PropTypes from "prop-types"

import { SearchBarContainer, AmountDisplay, Input } from "./SearchBar.styles"

const SearchBar = ({ loading, amount, handleSearch }) => {
	return (
		<SearchBarContainer>
			<AmountDisplay> {loading ? amount : "loading"} </AmountDisplay>
			<Input placeholder="Filter podcasts..." onChange={handleSearch} />
		</SearchBarContainer>
	)
}

SearchBar.defaultProps = {
	loading: false,
	amount: null,
}

SearchBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	amount: PropTypes.number,
}

export default SearchBar
