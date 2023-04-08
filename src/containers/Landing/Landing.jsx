import { useState } from "react"

import SearchBar from "components/landing/SearchBar/SearchBar"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const Landing = () => {
	const [, setSearchValue] = useState("")

	const handleSearch = e => {
		if (e.target.value) {
			setSearchValue(e.target.value)
		}
	}

	return (
		<LandingContainer>
			<SearchContainer>
				<SearchBar handleSearch={handleSearch} />
			</SearchContainer>
			<CardsContainer> Cards </CardsContainer>
		</LandingContainer>
	)
}

export default Landing
