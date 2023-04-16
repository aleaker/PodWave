import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

import Landing, { landingLoader } from "containers/Landing/Landing"
import Podcast, { podcastLoader } from "containers/Podcast/Podcast"

import NotFound from "components/general/NotFound/NotFound"
import GeneralLayout from "components/layouts/GeneralLayout/GeneralLayout"
import EpisodesDetails from "components/podcast/EpisodesDetails/EpisodesDetails"
import EpisodePlayer from "components/podcast/EpisodePlayer/EpisodePlayer"

import ROUTES from "constants/routes"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<GeneralLayout />}>
			<Route path={ROUTES.LANDING} element={<Landing />} loader={landingLoader} />
			<Route
				path={`${ROUTES.PODCAST}/:podcastId`}
				element={<Podcast />}
				loader={({ params }) => podcastLoader(params.podcastId)}
			>
				<Route index element={<EpisodesDetails />} />
				<Route path={`${ROUTES.PODCAST}/:podcastId/${ROUTES.EPISODE}/:episodeId`} element={<EpisodePlayer />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

const App = () => {
	return <RouterProvider router={router} />
}

export default App
