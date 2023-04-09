import { useEffect, useState, useMemo } from "react"

import SearchBar from "components/landing/SearchBar/SearchBar"
import PodcastCard from "components/landing/PodcastCard/PodcastCard"

import useDataResolver from "hooks/useDataResolver"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const Landing = () => {
	const [searchValue, setSearchValue] = useState("")

	const { data, getData } = useDataResolver("list")

	const filteredList = useMemo(() => {
		return data
			? data.list.filter(({ title, author }) => {
					const formatedSearch = searchValue.toLowerCase()
					return title.toLowerCase().includes(formatedSearch) || author.toLowerCase().includes(formatedSearch)
			  })
			: null
	}, [data, searchValue])

	const handleSearch = e => {
		setSearchValue(e.target.value)
	}

	const renderCards = () => {
		return filteredList.map(({ id, title, author, imgSrc }) => (
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
				<SearchBar amount={filteredList?.length} handleSearch={handleSearch} />
			</SearchContainer>
			<CardsContainer>{filteredList && renderCards()}</CardsContainer>
		</LandingContainer>
	)
}

export default Landing
