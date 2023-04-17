import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom"
import DOMPurify from "dompurify"

import NotFound from "components/general/NotFound/NotFound"
import { Description } from "components/podcast/podcast.styles"

import { StyledDisplayCard, Title, StyledAudio } from "./EpisodePlayer.styles"

const contextPropTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	episodeUrl: PropTypes.string,
}

const EpisodePlayer = () => {
	const { title, description, episodeUrl } = useOutletContext()

	PropTypes.checkPropTypes(contextPropTypes, { title, description, episodeUrl }, "context types", "EpisodePlayer")

	const renderPlayer = () => {
		return (
			<StyledAudio controls autoPlay>
				<source src={episodeUrl} type="audio/mpeg" />
				Your browser does not support the audio element.
			</StyledAudio>
		)
	}

	return (
		<StyledDisplayCard>
			<Title>{title}</Title>
			<Description dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
			{episodeUrl ? renderPlayer() : <NotFound />}
		</StyledDisplayCard>
	)
}

export default EpisodePlayer
