import PropTypes from "prop-types"

import { Description } from "components/podcast/podcast.styles"

import { StyledDisplayCard, PodcastLogo, TextContainer, Title, Author, StyledText } from "./PodcastDetails.styles"

const PodcastDetails = ({ imgSrc, title, author, description }) => {
	return (
		<StyledDisplayCard>
			<PodcastLogo src={imgSrc} alt="podcast logo" />
			<TextContainer>
				<Title>{title}</Title>
				{author ? <Author>by {author}</Author> : null}
			</TextContainer>
			<TextContainer>
				<StyledText>Description</StyledText>
				<Description>{description}</Description>
			</TextContainer>
		</StyledDisplayCard>
	)
}

PodcastDetails.defaultProps = {
	imgSrc: "",
	title: "",
	author: "",
	description: "",
}

PodcastDetails.propTypes = {
	imgSrc: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	description: PropTypes.string,
}

export default PodcastDetails
