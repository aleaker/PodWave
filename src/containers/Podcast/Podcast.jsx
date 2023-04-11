import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"

import PodcastDetails from "components/podcast/PodcastDetails/PodcastDetails"

import useDataResolver from "hooks/useDataResolver"

import { PodcastContainer, OutletContainer } from "./Podcast.styles"

const Podcast = () => {
	const { data, getData } = useDataResolver("singlePodcast")
	const { episodesList, episodesCount } = data || {}

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
				<Outlet context={[episodesList, episodesCount]} />
			</OutletContainer>
		</PodcastContainer>
	)
}

export default Podcast
