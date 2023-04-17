import React from "react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act, render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import { routesConfig } from "./App"

import ROUTES from "constants/routes"
import { PODCASTS_LIST_MOCKUP } from "constants/tests"

import { modifyRouteAttribute } from "util/tests"

test("app renders Landing page", async () => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: [ROUTES.LANDING],
	})

	render(<RouterProvider router={router} />)

	// verify the Header is rendered
	expect(await screen.findByText(/podcaster/i)).toBeInTheDocument()

	// verify the Landing Searchbox is rendered
	expect(screen.getByRole("textbox")).toBeInTheDocument()
})

test("using inexistent route renders 404 page", () => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: ["/inexistent-route"],
	})

	render(<RouterProvider router={router} />)

	// verify navigation to inexistent route
	expect(screen.getByText(/Looks like you are lost/i)).toBeInTheDocument()
})

test("user clicking on a podcast link renders podcast page", async () => {
	const routesConfigWithMockedData = modifyRouteAttribute(routesConfig, "landing", "loader", () => PODCASTS_LIST_MOCKUP)

	const router = createMemoryRouter(routesConfigWithMockedData, {
		initialEntries: [ROUTES.LANDING],
	})
	const user = userEvent.setup()
	render(<RouterProvider router={router} />)

	const pocastLink = await screen.findByRole("link", {
		name: /podcast logo the joe budden podcast author: the joe budden network/i,
	})

	// verify podcast link is rendered
	expect(pocastLink).toBeInTheDocument()

	await act(() => user.click(pocastLink))
	// verify that clicking on podcast link rendered the podcast page
	expect(await screen.findByText(/episodes:/i)).toBeInTheDocument()
})

test("user typing in the search bar filters the podcasts list", async () => {
	const routesConfigWithMockedData = modifyRouteAttribute(routesConfig, "landing", "loader", () => PODCASTS_LIST_MOCKUP)

	const router = createMemoryRouter(routesConfigWithMockedData, {
		initialEntries: [ROUTES.LANDING],
	})
	const user = userEvent.setup()
	render(<RouterProvider router={router} />)
    const searchBar = await screen.findByRole("textbox")

    await act(() => user.type(searchBar, 'little light'))


	// verify searched podcast is in the list
	expect(await screen.findByRole('link', {  name: /podcast logo this little light author: cadence13 and parallel/i})).toBeInTheDocument()

    // verify the list is filtered
	expect(screen.queryByText("link", {
		name: /podcast logo the joe budden podcast author: the joe budden network/i,
	})).toBeNull()
})
