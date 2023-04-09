import { useEffect, useState } from "react"

import SearchBar from "components/landing/SearchBar/SearchBar"
import PodcastCard from "components/landing/PodcastCard/PodcastCard"

import useDataResolver from "hooks/useDataResolver"

import { debounce } from "util/helpers"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const Landing = () => {
	const [, setSearchValue] = useState("")

	const { data, getData } = useDataResolver("list")

	const handleSearch = debounce(e => {
		if (e.target.value) {
			setSearchValue(e.target.value)
		}
	})

	const renderCards = () => {
		return data.list.map(({ id, title, author, imgSrc }) => (
			<PodcastCard key={id} title={title} author={author} imgSrc={imgSrc} />
		))
	}

	useEffect(() => {
		if (!data) {
			getData("podcasts")
		}
	}, [])

	return (
		<LandingContainer>
			<SearchContainer>
				<SearchBar handleSearch={handleSearch} />
			</SearchContainer>
			<CardsContainer>{data && renderCards()}</CardsContainer>
		</LandingContainer>
	)
}

export default Landing
