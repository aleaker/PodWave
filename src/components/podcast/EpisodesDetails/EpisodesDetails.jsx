import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom"

import EpisodesCounter from "./EpisodesCounter/EpisodesCounter"
import EpisodesTable from "./EpisodesTable/EpisodesTable"

import { EpisodesDetailsContainer } from "./EpisodesDetails.styles"

const contextPropTypes = {
	episodesList: PropTypes.arrayOf(PropTypes.shape({})),
	amount: PropTypes.number,
}

const EpisodesDetails = () => {
	const [episodesList = null, amount = null] = useOutletContext()

	PropTypes.checkPropTypes(
		contextPropTypes,
		{
			episodesList,
			amount,
		},
		"context types",
		"EpisodesDetails"
	)

	return (
		<EpisodesDetailsContainer>
			<EpisodesCounter amount={amount} />
			<EpisodesTable episodesList={episodesList} />
		</EpisodesDetailsContainer>
	)
}

export default EpisodesDetails
