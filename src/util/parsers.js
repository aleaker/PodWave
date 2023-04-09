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
