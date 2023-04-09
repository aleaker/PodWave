import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "containers/Landing/Landing"

import Podcast from "containers/Podcast/Podcast"
import GeneralLayout from "components/layouts/GeneralLayout/GeneralLayout"

import ROUTES from "constants/routes"

const App = () => {
	return (
		<BrowserRouter>
			<GeneralLayout>
				<Routes>
					<Route path={ROUTES.LANDING} element={<Landing />} />
					<Route path={ROUTES.PODCAST} element={<Podcast />}>
						<Route index element={<div>Podcast table</div>} />
						<Route path={`${ROUTES.PODCAST}/${ROUTES.EPISODE}`} element={<div>Episode details</div>} />
					</Route>
				</Routes>
			</GeneralLayout>
		</BrowserRouter>
	)
}

export default App
