import PropTypes from "prop-types"

import { StyledDisplayCard, Title, AuthorData } from "./PodcastCard.styles"

const PodcastCard = ({ title, author }) => {
	return (
		<StyledDisplayCard>
			{title ? <Title> {title} </Title> : null}
			{author ? <AuthorData>Author: {author}</AuthorData> : null}
		</StyledDisplayCard>
	)
}

PodcastCard.defaultProps = {
	title: "",
	author: "",
}

PodcastCard.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
}

export default PodcastCard
