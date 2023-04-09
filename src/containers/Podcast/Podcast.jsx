import { Outlet } from "react-router-dom"

import PodcastDetails from "components/podcast/PodcastDetails/PodcastDetails"

import { PodcastContainer, OutletContainer } from "./Podcast.styles"

const Podcast = () => {
	return (
		<PodcastContainer>
			<PodcastDetails
				imgSrc="https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/30/1c/1f/301c1f05-639c-bb22-cfdd-4c71aca5761e/mza_3479668065976336868.png/170x170bb.png"
				title="Podcast title"
				author="Author of podcast"
				description="Podcast text description"
			/>
			<OutletContainer>
				<Outlet />
			</OutletContainer>
		</PodcastContainer>
	)
}

export default Podcast
