import PropTypes from "prop-types"

import { StyledDisplayCard, PodcastLogo, TextContainer, Title, AuthorData } from "./PodcastCard.styles"

const PodcastCard = ({ title, author, imgSrc }) => {
	return (
		<StyledDisplayCard href="/">
			<PodcastLogo src={imgSrc} alt="podcast logo" />
			<TextContainer>
				{title ? <Title> {title} </Title> : null}
				{author ? <AuthorData>Author: {author}</AuthorData> : null}
			</TextContainer>
		</StyledDisplayCard>
	)
}

PodcastCard.defaultProps = {
	title: "",
	author: "",
	imgSrc: "",
}

PodcastCard.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	imgSrc: PropTypes.string,
}

export default PodcastCard
