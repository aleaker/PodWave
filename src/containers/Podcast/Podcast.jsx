import { useEffect, useMemo } from "react"
import { Outlet, useParams } from "react-router-dom"

import PodcastDetails from "components/podcast/PodcastDetails/PodcastDetails"

import useDataResolver from "hooks/useDataResolver"

import { PodcastContainer, OutletContainer } from "./Podcast.styles"

const Podcast = () => {
	const { data: podcastData, getData: getPodcastData } = useDataResolver("list")

	const { data: episodesData, getData: getEpisodesData } = useDataResolver("singlePodcast")

	const { podcastId } = useParams()

	const { imgSrc, title, author, description } = useMemo(() => {
		const { list } = podcastData || {}

		return list ? list.find(podcast => podcast.id === podcastId) : {}
	}, [podcastData])

	useEffect(() => {
		if (!podcastData) {
			getPodcastData("podcasts")
		}
	}, [])

	useEffect(() => {
		if (!episodesData) {
			getEpisodesData(podcastId)
		}
	}, [])

	return (
		<PodcastContainer>
			<PodcastDetails imgSrc={imgSrc} title={title} author={author} description={description} />
			<OutletContainer>
				<Outlet context={[episodesData?.episodesList, episodesData?.episodesData]} />
			</OutletContainer>
		</PodcastContainer>
	)
}

export default Podcast
