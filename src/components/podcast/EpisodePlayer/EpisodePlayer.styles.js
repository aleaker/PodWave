import styled from "styled-components"

import DisplayCard from "components/general/DisplayCard/DisplayCard"

import { battleshipGray, onyx } from "theme/colors"

export const StyledDisplayCard = styled(DisplayCard)`
	width: 90%;
	height: fit-content;
`

export const StyledAudio = styled.audio``

export const Title = styled.span`
	color: ${onyx};
	font-weight: bold;
	font-size: 25px;
	margin-top: auto;
`

export const Description = styled.p`
	color: ${battleshipGray};
`
