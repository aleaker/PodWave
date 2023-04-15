import styled from "styled-components"

import { Link as ReactRouterLink } from "react-router-dom"
import DisplayCard from "components/general/DisplayCard/DisplayCard"

import { baseTextStyles } from "components/podcast/podcast.styles"

import { battleshipGray, onyx } from "theme/colors"

export const StyledDisplayCard = styled(DisplayCard)`
	padding: 10px;
	flex: 1;
	height: fit-content;
`

export const StyledLogoLink = styled(ReactRouterLink)`
	width: 70%;
	margin: auto auto 20px;
`

export const PodcastLogo = styled.img`
	width: 100%;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 18px 0;
	border-top: 1px solid ${battleshipGray};
`

export const Title = styled.span`
	color: ${onyx};
	font-weight: bold;
`

export const Author = styled.span`
	${baseTextStyles}
`

export const StyledText = styled.span`
	color: ${onyx};
	font-weight: 500;
`
