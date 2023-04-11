import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"

import PodcastDetails from "components/podcast/PodcastDetails/PodcastDetails"

import useDataResolver from "hooks/useDataResolver"

import { PodcastContainer, OutletContainer } from "./Podcast.styles"

const MOCK_LIST = [
	{ episodeId: "1", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "2", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "3", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "4", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "5", title: "asdasd", date: "2/6/9696", duration: "30" },
]

const MOCK_AMOUNT = "5"

const Podcast = () => {
	const { data, getData } = useDataResolver("singlePodcast")

	const { podcastId } = useParams()

	useEffect(() => {
		if (!data) {
			getData(podcastId)
		}
	}, [])

	return (
		<PodcastContainer>
			<PodcastDetails
				imgSrc="https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/30/1c/1f/301c1f05-639c-bb22-cfdd-4c71aca5761e/mza_3479668065976336868.png/170x170bb.png"
				title="Podcast title"
				author="Author of podcast"
				description="Podcast text description"
			/>
			<OutletContainer>
				<Outlet context={[MOCK_LIST, MOCK_AMOUNT]} />
			</OutletContainer>
		</PodcastContainer>
	)
}

export default Podcast
