import { rest } from "msw"
import {PODCASTS_LIST_MOCKUP,SINGLE_PODCAST_MOCKUP} from "constants/tests"

export const handlers = [

	// Handles a POST /login request
	rest.post("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json", (req,res,ctx)=>{
		return res(ctx.status(200),
		ctx.json(PODCASTS_LIST_MOCKUP))
	}),

	// Handles a GET /user request
	rest.post("https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20", (req,res,ctx)=>{
		return res(ctx.status(200),
		ctx.json(SINGLE_PODCAST_MOCKUP))
	}),
]
