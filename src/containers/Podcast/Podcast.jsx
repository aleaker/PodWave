import { useMemo } from "react"
import { Outlet, useParams, useLoaderData } from "react-router-dom"

import PodcastDetails from "components/podcast/PodcastDetails/PodcastDetails"

import PRESETS from "constants/presets"

import { getData } from "util/helpers"

import { PodcastContainer, OutletContainer } from "./Podcast.styles"

const Podcast = () => {
	const { podcastData, episodesCount, episodesList } = useLoaderData()

	const { podcastId, episodeId } = useParams()

	const { imgSrc, title, author, description } = useMemo(() => {
		const { list } = podcastData || {}

		return list ? list.find(podcast => podcast.id === podcastId) : {}
	}, [podcastData])

	const selectedEpisode = useMemo(() => {
		return episodesList ? episodesList.find(episode => episode.episodeId === episodeId) : {}
	}, [episodeId, episodesList])

	const resolveContextData = () => selectedEpisode || [episodesList, episodesCount]

	return (
		<PodcastContainer>
			<PodcastDetails imgSrc={imgSrc} title={title} author={author} description={description} />
			<OutletContainer>
				<Outlet context={resolveContextData()} />
			</OutletContainer>
		</PodcastContainer>
	)
}

export default Podcast

export const podcastLoader = async storageKey => {
	const podcastData = await getData("podcasts", PRESETS.list)
	const { episodesList, episodesCount } = await getData(storageKey, PRESETS.singlePodcast)
	return { podcastData, episodesList, episodesCount }
}
