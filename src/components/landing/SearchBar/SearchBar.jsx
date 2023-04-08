import PropTypes from "prop-types"

import { SearchBarContainer, AmountDisplay, Input } from "./SearchBar.styles"

const SearchBar = ({ loading, amount }) => {
	return (
		<SearchBarContainer>
			<AmountDisplay> {loading ? amount : "loading"} </AmountDisplay>
			<Input />
		</SearchBarContainer>
	)
}

SearchBar.defaultProps = {
	loading: false,
	amount: null,
}

SearchBar.propTypes = {
	loading: PropTypes.bool,
	amount: PropTypes.number,
}

export default SearchBar
