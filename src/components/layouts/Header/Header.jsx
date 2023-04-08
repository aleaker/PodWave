import PropTypes from "prop-types"

import { HeaderContainer, Title, Loader } from "./Header.styles"

const Header = ({ loading }) => {
	return (
		<HeaderContainer>
			<Title> Podcaster </Title>
			{loading ? <Loader /> : null}
		</HeaderContainer>
	)
}

Header.defaultProps = {
	loading: false,
}

Header.propTypes = {
	loading: PropTypes.bool,
}

export default Header
