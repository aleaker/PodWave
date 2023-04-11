import { podcastsListParser, episodesListParser } from "util/parsers"

import ENDPOINTS from "./endpoints"

export default {
	list: {
		id: "list",
		endpoint: ENDPOINTS.PODCASTS_LIST,
		parser: podcastsListParser,
		paramsToReplace: null,
	},
	singlePodcast: {
		id: "singlePodcast",
		endpoint: ENDPOINTS.PODCAST_DETAILS,
		parser: episodesListParser,
		paramsToReplace: "::podcastId::",
	},
}
