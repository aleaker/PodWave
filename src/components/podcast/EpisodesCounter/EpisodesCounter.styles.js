import styled from "styled-components"

import DisplayCard from "components/general/DisplayCard/DisplayCard"

import { onyx } from "theme/colors"

export const StyledDisplayCard = styled(DisplayCard)`
	width: 90%;
	min-height: unset;
	height: 30px;
	padding: 10px 25px;
`

export const Amount = styled.span`
	color: ${onyx};
	font-weight: bold;
	font-size: 25px;
	margin-top: auto;
`
