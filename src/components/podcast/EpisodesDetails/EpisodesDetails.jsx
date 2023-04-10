import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom"

import EpisodesCounter from "components/podcast/EpisodesCounter/EpisodesCounter"
import EpisodesTable from "components/podcast/EpisodesTable/EpisodesTable"

import { EpisodesDetailsContainer } from "./EpisodesDetails.styles"

const EpisodesDetails = () => {
	const [episodesList = null, amount = null] = useOutletContext()

	PropTypes.checkPropTypes(
		{
			episodesList: PropTypes.arrayOf(PropTypes.shape({})),
			amount: PropTypes.string,
		},
		{
			episodesList,
			amount,
		},
		"EpisodesDetailsContext",
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
