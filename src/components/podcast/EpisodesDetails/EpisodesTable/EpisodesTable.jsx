import PropTypes from "prop-types"
import { useLocation, useNavigate } from "react-router-dom"

import ROUTES from "constants/routes"

import { StyledDisplayCard, StyledTable, EpisodeName } from "./EpisodesTable.styles"

const EpisodesTable = ({ episodesList }) => {
	const navigate = useNavigate()
	const location = useLocation()

	const currentPath = location.pathname
	const handleClick = episodeId => {
		if (episodeId) {
			navigate(`${currentPath}${ROUTES.EPISODE}/${episodeId}`)
		}
	}

	const renderRows = () => {
		return episodesList?.map(({ episodeId, title, date, duration }) => {
			return (
				<tr key={episodeId}>
					<td>
						<EpisodeName onClick={() => handleClick(episodeId)}>{title}</EpisodeName>
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
