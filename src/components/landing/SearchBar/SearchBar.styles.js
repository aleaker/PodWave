import styled from "styled-components"

import { battleshipGray, blue, powder } from "theme/colors"

export const SearchBarContainer = styled.div`
	display: flex;
`

export const AmountDisplay = styled.span`
	display: flex;
	justify-content: center;
	height: 18px;
	padding: 4px;
	min-width: 40px;
	margin: auto;
	background: ${blue};
	color: ${powder};
	font-weight: 900;
	border-radius: 20px;
`

export const Input = styled.input`
	height: 26px;
	margin-left: 10px;
	padding-left: 10px;
	border-radius: 5px;
	border: 1px solid ${battleshipGray};
`
