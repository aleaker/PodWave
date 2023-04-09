import styled from "styled-components"

import { battleshipGray, blue, powder } from "theme/colors"

export const SearchBarContainer = styled.div`
	display: flex;
`

export const AmountDisplay = styled.span`
	display: flex;
	justify-content: center;
	padding: auto;
	margin-right: 10px;
	background: ${blue};
	color: ${powder};
	font-weight: bold;
	border-radius: 20px;
	min-width: 40px;
`

export const Input = styled.input`
	border: 1px solid ${battleshipGray};
	border-radius: 5px;
`
