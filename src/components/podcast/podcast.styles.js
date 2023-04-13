import styled, { css } from "styled-components"

import { battleshipGray } from "theme/colors"

export const baseTextStyles = css`
	color: ${battleshipGray};
	font-style: italic;
`

export const Description = styled.p`
	${baseTextStyles}
`
