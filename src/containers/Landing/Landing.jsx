import { useState, useMemo } from "react"
import { useLoaderData } from "react-router-dom"

import SearchBar from "components/landing/SearchBar/SearchBar"
import PodcastCard from "components/landing/PodcastCard/PodcastCard"

import ROUTES from "constants/routes"
import PRESETS from "constants/presets"

import { getData } from "util/helpers"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const Landing = () => {
	const [searchValue, setSearchValue] = useState("")
	const list = useLoaderData()

	const filteredList = useMemo(() => {
		return list
			? list.filter(({ title, author }) => {
					const formatedSearch = searchValue.toLowerCase()
					return title.toLowerCase().includes(formatedSearch) || author.toLowerCase().includes(formatedSearch)
			  })
			: null
	}, [list, searchValue])

	const handleSearch = e => {
		setSearchValue(e.target.value)
	}

	return (
		<LandingContainer>
			<SearchContainer>
				<SearchBar amount={filteredList?.length} handleSearch={handleSearch} />
			</SearchContainer>
			<CardsContainer>
				{filteredList?.map(({ id, title, author, imgSrc }) => (
					<PodcastCard
						key={id}
						title={title}
						author={author}
						imgSrc={imgSrc}
						href={id ? `${ROUTES.PODCAST}/${id}` : null}
					/>
				))}
			</CardsContainer>
		</LandingContainer>
	)
}

export default Landing

export const landingLoader = async () => {
	const { list } = await getData("podcasts", PRESETS.list)

	return list
}
