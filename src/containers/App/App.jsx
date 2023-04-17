import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Landing, { landingLoader } from "containers/Landing/Landing"
import Podcast, { podcastLoader } from "containers/Podcast/Podcast"

import NotFound from "components/general/NotFound/NotFound"
import GeneralLayout from "components/layouts/GeneralLayout/GeneralLayout"
import EpisodesDetails from "components/podcast/EpisodesDetails/EpisodesDetails"
import EpisodePlayer from "components/podcast/EpisodePlayer/EpisodePlayer"

import ROUTES from "constants/routes"

export const routesConfig = [
	{
		id: "layout",
		element: <GeneralLayout />,
		children: [
			{ id: "landing", path: ROUTES.LANDING, element: <Landing />, loader: landingLoader },
			{
				id: "podcast",
				path: `${ROUTES.PODCAST}/:podcastId`,
				element: <Podcast />,
				loader: ({ params }) => podcastLoader(params.podcastId),
				children: [
					{ id: "episodes-details", index: true, element: <EpisodesDetails /> },
					{
						id: "episode-player",
						path: `${ROUTES.PODCAST}/:podcastId/${ROUTES.EPISODE}/:episodeId`,
						element: <EpisodePlayer />,
					},
				],
			},
			{ id: "not-found", path: "*", element: <NotFound /> },
		],
	},
]

const router = createBrowserRouter(routesConfig)

const App = () => {
	return <RouterProvider router={router} />
}

export default App
