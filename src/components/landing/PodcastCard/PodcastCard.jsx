import PropTypes from "prop-types"

import { StyledDisplayCard, PodcastLogo, TextContainer, Title, AuthorData } from "./PodcastCard.styles"

const PodcastCard = ({ title, author, imgSrc, href }) => {
	return (
		<StyledDisplayCard href={href}>
			<PodcastLogo src={imgSrc} alt="podcast logo" />
			<TextContainer>
				{title ? <Title> {title} </Title> : null}
				{author ? <AuthorData>Author: {author}</AuthorData> : null}
			</TextContainer>
		</StyledDisplayCard>
	)
}

PodcastCard.defaultProps = {
	href: "",
	title: "",
	author: "",
	imgSrc: "",
}

PodcastCard.propTypes = {
	href: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	imgSrc: PropTypes.string,
}

export default PodcastCard
