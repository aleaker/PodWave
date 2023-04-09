import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "containers/Landing/Landing"

import GeneralLayout from "components/layouts/GeneralLayout/GeneralLayout"

import ROUTES from "constants/routes"

const App = () => {
	return (
		<BrowserRouter>
			<GeneralLayout>
				<Routes>
					<Route path={ROUTES.LANDING} element={<Landing />} />
				</Routes>
			</GeneralLayout>
		</BrowserRouter>
	)
}

export default App
