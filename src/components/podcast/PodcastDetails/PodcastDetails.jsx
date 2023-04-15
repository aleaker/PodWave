import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

import TextLink from "components/general/TextLink/TextLink"

import ROUTES from "constants/routes"

import { Description } from "components/podcast/podcast.styles"

import {
	StyledDisplayCard,
	StyledLogoLink,
	PodcastLogo,
	TextContainer,
	Title,
	Author,
	StyledText,
} from "./PodcastDetails.styles"

const PodcastDetails = ({ imgSrc, title, author, description }) => {
	const { podcastId } = useParams()
	return (
		<StyledDisplayCard>
			<StyledLogoLink to={`${ROUTES.PODCAST}/${podcastId}`}>
				<PodcastLogo src={imgSrc} alt="podcast logo" />
			</StyledLogoLink>
			<TextContainer>
				<TextLink to={`${ROUTES.PODCAST}/${podcastId}`}>
					<Title>{title}</Title>
				</TextLink>
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
