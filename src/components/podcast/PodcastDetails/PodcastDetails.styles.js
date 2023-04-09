import styled, { css } from "styled-components"

import DisplayCard from "components/general/DisplayCard/DisplayCard"

import { battleshipGray, onyx } from "theme/colors"

export const StyledDisplayCard = styled(DisplayCard)`
	padding: 10px;
	flex: 1;
`

export const PodcastLogo = styled.img`
	margin: auto;
	width: 70%;
	margin-bottom: 20px;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 18px 0;
	border-top: 1px solid ${battleshipGray};
`

const baseTextStyles = css`
	color: ${battleshipGray};
	font-style: italic;
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

export const Description = styled.p`
	${baseTextStyles}
`
