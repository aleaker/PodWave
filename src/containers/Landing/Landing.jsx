import SearchBar from "components/landing/SearchBar/SearchBar"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const Landing = () => {
	return (
		<LandingContainer>
			<SearchContainer>
				<SearchBar />
			</SearchContainer>
			<CardsContainer> Cards </CardsContainer>
		</LandingContainer>
	)
}

export default Landing
