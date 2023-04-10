import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "containers/Landing/Landing"

import Podcast from "containers/Podcast/Podcast"
import GeneralLayout from "components/layouts/GeneralLayout/GeneralLayout"
import EpisodesTable from "components/podcast/EpisodesTable/EpisodesTable"

import ROUTES from "constants/routes"

const App = () => {
	return (
		<BrowserRouter>
			<GeneralLayout>
				<Routes>
					<Route path={ROUTES.LANDING} element={<Landing />} />
					<Route path={`${ROUTES.PODCAST}/:podcastId`} element={<Podcast />}>
						<Route index element={<EpisodesTable />} />
						<Route
							path={`${ROUTES.PODCAST}/:podcastId/${ROUTES.EPISODE}/:episodeId`}
							element={<div>Episode details</div>}
						/>
					</Route>
				</Routes>
			</GeneralLayout>
		</BrowserRouter>
	)
}

export default App
