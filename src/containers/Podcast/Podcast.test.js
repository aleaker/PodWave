import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act, screen } from "@testing-library/react"

import ROUTES from "constants/routes"

import { renderWithRouter } from "util/tests"
import { routesConfig } from "containers/App/App"

test("navigating to a valid podcast page renders podcast page", async () => {
	renderWithRouter(routesConfig, `${ROUTES.PODCAST}/1535809341`)

	const link = await screen.findByRole("cell", { name: /episode 617 \| “ribbit”/i })
	// verify correct episode link is in the table
	expect(link).toBeInTheDocument()

	// verify that EpisodesCounter is rendered with the correct amount of episodes
	expect(await screen.findByText(/episodes: 20/i)).toBeInTheDocument()
})

test("clicking on an episode link renders the correct episode details", async () => {
	const user = userEvent.setup()

	renderWithRouter(routesConfig, `${ROUTES.PODCAST}/1535809341`)

	const link = await screen.findByText(/episode 620 \| "who said\?"/i)
	await act(() => user.click(link))

	// verify that the correct description is rendered in the EpisodePlayer
	const description = await screen.findByText(
		// eslint-disable-next-line
		/the gang records their first episode without joe as they begin with the latest news on jonathan majors as additional abuse allegations come to light \(12:47\) and tiffany haddish attempts to defend him \(25:57\)\. desiigner seeks mental health treatment after exposing himself on an airplane \(36:55\), frank ocean pulls out of weekend 2 of coachella due to an injury \(1:00:33\), and \*spoiler alert\* snowfall series finale recap \(1:05:00\)\. also, the jbp gives their thoughts on the chance the rapper dancing video \(1:29:01\), eagles qb jalen hurts pens a love letter to black women \(1:40:06\), \+ more! become a patron of the joe budden podcast for additional bonus episodes and visual content for all things jbp\.: tap in here www\.patreon\.com\/joebudden sleeper picks: ice \| lloyd banks \- “cliffhanger” melyssa \| samtrax \(feat\. amber oliver\) \- “you are” parks \| your old droog & madlib \- “pronouns” ish \| yung bleu & chris brown \- “distant lover”/i
	)
	expect(description).toBeInTheDocument()
})

test("navigating to a valid episode page renders episode player", async () => {
	renderWithRouter(routesConfig, `${ROUTES.PODCAST}/1535809341${ROUTES.EPISODE}/1000610181965`)
	// verify correct episode title is rendered

	expect(await screen.findByText(/episode 620 \| "who said\?"/i)).toBeInTheDocument()
})
