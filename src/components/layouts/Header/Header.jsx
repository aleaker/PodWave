import { useNavigation } from "react-router-dom"

import HeaderTitle from "components/layouts/HeaderTitle/HeaderTitle"

import { HeaderContainer, Loader } from "./Header.styles"

const Header = () => {
	const navigation = useNavigation()

	return (
		<HeaderContainer>
			<HeaderTitle />
			{navigation.state === "loading" ? <Loader /> : null}
		</HeaderContainer>
	)
}

export default Header
