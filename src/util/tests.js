import { render } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import ROUTES from "constants/routes"

export const modifyRouteAttribute = (routes, id, attribute, data) => {
	const modify = route => {
		const newRoute = { ...route }
		if (newRoute.id === id) {
			newRoute[attribute] = data
		}
		if (newRoute.children) {
			newRoute.children.forEach(modify)
		}
	}

	const newRoutes = [...routes]
	newRoutes.forEach(modify)
	return newRoutes
}

export const renderWithRouter = (routesConfig, route = ROUTES.LANDING) => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: [route],
	})

	return render(<RouterProvider router={router} />)
}
