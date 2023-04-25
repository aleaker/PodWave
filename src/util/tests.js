import { render } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import ROUTES from "constants/routes"


export const renderWithRouter = (routesConfig, route = ROUTES.LANDING) => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: [route],
	})

	return render(<RouterProvider router={router} />)
}
