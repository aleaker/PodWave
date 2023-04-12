import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

import Landing from "containers/Landing/Landing"

import Podcast from "containers/Podcast/Podcast"
import GeneralLayout from "components/layouts/GeneralLayout/GeneralLayout"
import EpisodesDetails from "components/podcast/EpisodesDetails/EpisodesDetails"

import ROUTES from "constants/routes"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<GeneralLayout />}>
			<Route path={ROUTES.LANDING} element={<Landing />} />
			<Route path={`${ROUTES.PODCAST}/:podcastId`} element={<Podcast />}>
				<Route index element={<EpisodesDetails />} />
				<Route
					path={`${ROUTES.PODCAST}/:podcastId/${ROUTES.EPISODE}/:episodeId`}
					element={<div>Episode details</div>}
				/>
			</Route>
		</Route>
	)
)

const App = () => {
	return <RouterProvider router={router} />
}

export default App
