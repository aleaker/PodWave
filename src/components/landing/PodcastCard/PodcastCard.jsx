import PropTypes from "prop-types"

import { Title, AuthorData } from "./PodcastCard.styles"

const PodcastCard = ({ title, author }) => {
	return (
		<div>
			{title?<Title> {title} </Title>:null}
			{author?<AuthorData>Author: {author}</AuthorData>:null}
        </div>
	)
}

PodcastCard.defaultProps = {
    title: "",
	author: ""
}

PodcastCard.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
}

export default PodcastCard
