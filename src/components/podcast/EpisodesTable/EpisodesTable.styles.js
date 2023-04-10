import styled from "styled-components"

import DisplayCard from "components/general/DisplayCard/DisplayCard"

import { blue, battleshipGray, onyx } from "theme/colors"

export const StyledDisplayCard = styled(DisplayCard)`
	width: 90%;
`

export const StyledTable = styled.table`
	border-collapse: collapse;
	tr {
		height: 30px;
	}
	thead {
		tr {
			border-bottom: 2px solid ${battleshipGray};
			th {
				color: ${onyx};
				text-align: left;
				&:first-child {
					padding-left: 5px;
				}
			}
		}
	}
	tbody {
		tr {
			&:nth-child(odd) {
				background: #f9f9f9;
			}
			border: 0px;
			border-bottom: 1px solid ${battleshipGray};

			td {
				&:first-child {
					width: 75%;
					padding-left: 5px;
				}

				&:last-child {
					width: 10%;
					text-align: center;
				}
			}
		}
	}
`

export const EpisodeName = styled.span`
	color: ${blue};
	cursor: pointer;
`
