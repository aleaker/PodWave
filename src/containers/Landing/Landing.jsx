import { useState } from "react"

import SearchBar from "components/landing/SearchBar/SearchBar"

import { debounce } from "util/helpers"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const Landing = () => {
	const [, setSearchValue] = useState("")

	const handleSearch = debounce(e => {
		if (e.target.value) {
			setSearchValue(e.target.value)
		}
	})

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
