import moment from "moment"

export const podcastsListParser = unparsedData => {
	const list = unparsedData?.feed?.entry?.map(podcastData => {
		return {
			id: podcastData.id.attributes["im:id"],
			title: podcastData["im:name"].label.toUpperCase(),
			author: podcastData["im:artist"].label,
			imgSrc: podcastData["im:image"][2].label,
			description: podcastData.summary.label,
		}
	})
	const timestamp = new Date().getTime()
	return { list, timestamp }
}

export const episodesListParser = ({ resultCount, results }) => {
	const episodesCount = resultCount

	const [, ...episodesData] = results
	const episodesList = episodesData?.map(
		({ trackId, episodeUrl, trackTimeMillis, releaseDate, description, trackName }) => {
			return {
				episodeId: `${trackId}`,
				episodeUrl,
				duration: moment.utc(trackTimeMillis).format("mm:ss"),
				date: moment(releaseDate).format("DD/MM/YYYY"),
				description,
				title: trackName,
			}
		}
	)
	const timestamp = new Date().getTime()

	return { episodesCount, episodesList, timestamp }
}
