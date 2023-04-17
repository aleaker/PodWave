import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act, screen } from "@testing-library/react"

import ROUTES from "constants/routes"
import { SINGLE_PODCAST_MOCKUP } from "constants/tests"

import { renderWithRouter, modifyRouteAttribute } from "util/tests"
import { routesConfig } from "containers/App/App"

test("navigating to a valid podcast page renders podcast page", async () => {
	const routesConfigWithMockedData = modifyRouteAttribute(
		routesConfig,
		"podcast",
		"loader",
		() => SINGLE_PODCAST_MOCKUP
	)

	renderWithRouter(routesConfigWithMockedData, `${ROUTES.PODCAST}/1096830182`)

	const link = await screen.findByRole("cell", { name: /episode 358 w\/ marlon wayans/i })
	// verify correct episode link is in the table
	expect(link).toBeInTheDocument()

	// verify that EpisodesCounter is rendered with the correct amount of episodes
	expect(await screen.findByText(/episodes: 20/i)).toBeInTheDocument()
})

test("clicking on an episode link renders the correct episode details", async () => {
	const user = userEvent.setup()

	const routesConfigWithMockedData = modifyRouteAttribute(
		routesConfig,
		"podcast",
		"loader",
		() => SINGLE_PODCAST_MOCKUP
	)

	renderWithRouter(routesConfigWithMockedData, `${ROUTES.PODCAST}/1096830182`)

	const link = await screen.findByText(/episode 340 w\/ bobby shmurda/i)
	await act(() => user.click(link))

	// verify that the correct description is rendered in the EpisodePlayer
	const description = await screen.findByText(
		/n\.o\.r\.e\. & dj efn are the drink champs\. in this episode we chop it up with the one and only bobby shmurda! bobby joins us and shares his journey in music\. with its highs and lows, bobby shares stories about his career, serving time in prison, making hit records and much much more! lots of great stories that you don’t want to miss!! make some noise!!! 💐💐💐🏆🏆🏆 \*subscribe to patreon now for exclusive content, discount codes, m&g’s \+ more: 🏆\* https:\/\/www\.patreon\.com\/drinkchamps \*listen and subscribe at https:\/\/www\.drinkchamps\.com follow drink champs: https:\/\/www\.instagram\.com\/drinkchamps https:\/\/www\.twitter\.com\/drinkchamps https:\/\/www\.facebook\.com\/drinkchamps https:\/\/www\.youtube\.com\/drinkchamps dj efn https:\/\/www\.crazyhood\.com https:\/\/www\.instagram\.com\/whoscrazy https:\/\/www\.twitter\.com\/djefn https:\/\/www\.facebook\.com\/crazyhoodproductions n\.o\.r\.e\. https:\/\/www\.instagram\.com\/therealnoreaga https:\/\/www\.twitter\.com\/noreaga \*check out our culture cards nft project by joining the culture cards discord: 👇\* https:\/\/discord\.gg\/theculturecards see omnystudio\.com\/listener for privacy information\./i
	)
	expect(description).toBeInTheDocument()
})

test("navigating to a valid episode page renders episode player", async () => {
	const routesConfigWithMockedData = modifyRouteAttribute(
		routesConfig,
		"podcast",
		"loader",
		() => SINGLE_PODCAST_MOCKUP
	)

	renderWithRouter(routesConfigWithMockedData, `${ROUTES.PODCAST}/1096830182${ROUTES.EPISODE}/1000607824407`)
	// verify correct episode title is rendered
	expect(await screen.findByText(/episode 358 w\/ marlon wayans/i)).toBeInTheDocument()
})
