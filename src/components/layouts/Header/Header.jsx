import { useLocation, useNavigation } from "react-router-dom"

import TextLink from "components/general/TextLink/TextLink"

import ROUTES from "constants/routes"

import { HeaderContainer, Title, Loader } from "./Header.styles"

const Header = () => {
	const navigation = useNavigation()
	const location = useLocation()

	const renderTitle = () => {
		const isLandingPath = location.pathname === ROUTES.LANDING

		if (!isLandingPath) {
			return (
				<TextLink to={ROUTES.LANDING}>
					<Title>Podcaster</Title>
				</TextLink>
			)
		}

		return <Title>Podcaster</Title>
	}

	return (
		<HeaderContainer>
			{renderTitle()}
			{navigation.state === "loading" ? <Loader /> : null}
		</HeaderContainer>
	)
}

export default Header
