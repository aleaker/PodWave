import { podcastsListParser } from "util/parsers"

import ENDPOINTS from "./endpoints"

export default {
	list: {
		id: "list",
		endpoint: ENDPOINTS.PODCASTS_LIST,
		parser: podcastsListParser,
	},
}
