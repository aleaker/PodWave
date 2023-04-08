import { HeaderContainer, Title, Loader } from "./Header.styles"

const Header = loading => {
	return (
		<HeaderContainer>
			<Title> Podcaster </Title>
			{loading ? <Loader /> : null}
		</HeaderContainer>
	)
}

export default Header
