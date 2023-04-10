// import PropTypes from "prop-types"

import { StyledDisplayCard, StyledTable, EpisodeName } from "./EpisodesTable.styles"

const MOCK_DATA = [
	{ episodeId: "1", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "1", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "1", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "1", title: "asd", date: "2/6/9696", duration: "30" },
	{ episodeId: "1", title: "asdasd", date: "2/6/9696", duration: "30" },
]

const EpisodesTable = () => {
	const renderRows = () => {
		return MOCK_DATA.map(({ title, date, duration }) => {
			return (
				<tr>
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

// EpisodesTable.defaultProps = {
// 	episodesList: null,
// }

// EpisodesTable.propTypes = {
// 	episodesList: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			episodeId: PropTypes.string,
// 			title: PropTypes.string,
// 			date: PropTypes.string,
// 			duration: PropTypes.string,
// 		})
// 	),
// }

export default EpisodesTable
