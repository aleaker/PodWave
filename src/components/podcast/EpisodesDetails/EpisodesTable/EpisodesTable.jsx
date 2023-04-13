import PropTypes from "prop-types"

import { StyledDisplayCard, StyledTable, EpisodeName } from "./EpisodesTable.styles"

const EpisodesTable = ({ episodesList }) => {
	const renderRows = () => {
		return episodesList?.map(({ episodeId, title, date, duration }) => {
			return (
				<tr key={episodeId}>
					<td>
						<EpisodeName>{title}</EpisodeName>
					</td>
					<td>{date}</td>
					<td>{duration}</td>
				</tr>
			)
		})
	}

	return (
		<StyledDisplayCard>
			<StyledTable>
				<thead>
					<tr>
						<th>Title</th>
						<th>Date</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>{renderRows()}</tbody>
			</StyledTable>
		</StyledDisplayCard>
	)
}

EpisodesTable.defaultProps = {
	episodesList: null,
}

EpisodesTable.propTypes = {
	episodesList: PropTypes.arrayOf(
		PropTypes.shape({
			episodeId: PropTypes.string,
			title: PropTypes.string,
			date: PropTypes.string,
			duration: PropTypes.string,
		})
	),
}

export default EpisodesTable
