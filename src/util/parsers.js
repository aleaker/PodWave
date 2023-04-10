import moment from "moment"

export const podcastsListParser = unparsedData => {
	const list = unparsedData.feed.entry.map(podcastData => {
		return {
			id: podcastData.id.attributes["im:id"],
			title: podcastData["im:name"].label.toUpperCase(),
			author: podcastData["im:artist"].label,
			imgSrc: podcastData["im:image"][2].label,
		}
	})
	const timestamp = new Date().getTime()
	return { list, timestamp }
}

export const episodesListParser = ({ resultCount, results }) => {
	const episodesCount = resultCount
	const list = results.map(({ episodeUrl, trackTimeMillis, releaseDate, description, trackName }) => {
		return {
			episodeUrl,
			duration: moment.utc(trackTimeMillis).format("mm:ss"),
			date: moment(releaseDate).format("DD/MM/YYYY"),
			description,
			name: trackName,
		}
	})
	const timestamp = new Date().getTime()

	return { episodesCount, list, timestamp }
}
