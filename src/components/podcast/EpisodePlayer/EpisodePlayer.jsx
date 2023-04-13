import { Description } from "components/podcast/podcast.styles"

import { StyledDisplayCard, Title, StyledAudio } from "./EpisodePlayer.styles"

const EpisodePlayer = () => {
	const renderPlayer = () => {
		return (
			<StyledAudio controls autoPlay>
				<source
					src="https://sphinx.acast.com/p/open/s/5eb984087ddaae6f69daa3dc/e/642b6deca5f38c0011cae654/media.mp3"
					type="audio/mpeg"
				/>
				Your browser does not support the audio element.
			</StyledAudio>
		)
	}

	return (
		<StyledDisplayCard>
			<Title>title</Title>
			<Description>desription</Description>
			{"mediaSrc" ? renderPlayer() : "Loading..."}
		</StyledDisplayCard>
	)
}

export default EpisodePlayer
