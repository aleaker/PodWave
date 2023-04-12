import { useNavigate, useLocation, useNavigation } from "react-router-dom"

import ROUTES from "constants/routes"

import { HeaderContainer, Title, Loader } from "./Header.styles"

const Header = () => {
	const navigation = useNavigation()
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
			{navigation.state === "loading" ? <Loader /> : null}
		</HeaderContainer>
	)
}

export default Header
