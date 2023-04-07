import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "containers/Landing/Landing"

import ROUTES from "constants/routes"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.LANDING} element={<Landing />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
