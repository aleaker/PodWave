import { useState } from "react"

import SearchBar from "components/landing/SearchBar/SearchBar"
import PodcastCard from "components/landing/PodcastCard/PodcastCard"

import { debounce } from "util/helpers"

import { LandingContainer, SearchContainer, CardsContainer } from "./Landing.styles"

const MOCK_DATA = [
	{
		id: "asd123",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd124",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd125",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd126",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd127",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd128",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd129",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd130",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd131",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
	{
		id: "asd132",
		title: "Podcast Name",
		author: "Podcast Author",
		imgSrc: "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png",
	},
]

const Landing = () => {
	const [, setSearchValue] = useState("")

	const handleSearch = debounce(e => {
		if (e.target.value) {
			setSearchValue(e.target.value)
		}
	})

	const renderCards = () => {
		return MOCK_DATA.map(({ id, title, author }) => <PodcastCard key={id}  title={title} author={author} />)
	}

	return (
		<LandingContainer>
			<SearchContainer>
				<SearchBar handleSearch={handleSearch} />
			</SearchContainer>
			<CardsContainer>{renderCards()}</CardsContainer>
		</LandingContainer>
	)
}

export default Landing
