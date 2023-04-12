import PropTypes from "prop-types"
import { useNavigate, useLocation } from "react-router-dom"

import ROUTES from "constants/routes"

import { HeaderContainer, Title, Loader } from "./Header.styles"

const Header = ({ loading }) => {
	const navigate = useNavigate()
	const location = useLocation()

	const isLandingPath = location.pathname === ROUTES.LANDING

	const handleClick = () => {
		if (!isLandingPath) {
			navigate(ROUTES.LANDING)
		}
	}

	return (
		<HeaderContainer>
			<Title $isClickable={!isLandingPath} onClick={handleClick}>
				Podcaster
			</Title>
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
