import { Outlet } from "react-router-dom"

import { PodcastContainer } from "./Podcast.styles"

const Podcast = () => {
	return (
		<PodcastContainer>
			<Outlet />
		</PodcastContainer>
	)
}

export default Podcast
