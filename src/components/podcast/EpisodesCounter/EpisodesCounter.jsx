import PropTypes from "prop-types"

import { StyledDisplayCard, Amount } from "./EpisodesCounter.styles"

const EpisodesCounter = ({ amount }) => {
	return (
		<StyledDisplayCard>
			<Amount>Episodes: {amount}</Amount>
		</StyledDisplayCard>
	)
}

EpisodesCounter.defaultProps = {
	amount: null,
}

EpisodesCounter.propTypes = {
	amount: PropTypes.number,
}

export default EpisodesCounter
