import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import DisplayCard from "components/general/DisplayCard/DisplayCard"

import { battleshipGray, onyx } from "theme/colors"

export const StyledCardLink = styled(Link)`
	text-decoration: none;
	display: flex;
`

export const StyledDisplayCard = styled(DisplayCard)`
	width: 240px;
	margin-top: 80px;
	padding-top: 80px;
	justify-content: flex-start;
	min-height: initial;
`

export const PodcastLogo = styled.img`
	position: absolute;
	height: 160px;
	border-radius: 50%;
	object-fit: scale-down;
	top: -80px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`

export const TextContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
`

const baseTextStyle = css`
	text-align: center;
	margin-top: 8px;
`

export const Title = styled.span`
	${baseTextStyle}
	font-weight: bold;
	color: ${onyx};
`

export const AuthorData = styled.span`
	${baseTextStyle}
	color: ${battleshipGray};
`
