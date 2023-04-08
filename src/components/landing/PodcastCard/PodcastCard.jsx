import PropTypes from "prop-types"

import { StyledDisplayCard, PodcastLogo, Title, AuthorData } from "./PodcastCard.styles"

const PodcastCard = ({ title, author, imgSrc }) => {
	return (
		<StyledDisplayCard>
			<PodcastLogo src={imgSrc} alt="podcast logo" />
			{title ? <Title> {title} </Title> : null}
			{author ? <AuthorData>Author: {author}</AuthorData> : null}
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
