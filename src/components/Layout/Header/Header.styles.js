import styled, { keyframes } from "styled-components"

export const HeaderContainer = styled.div``

export const Title = styled.span``

const LoaderAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const Loader = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: blue;
	box-shadow: 0 0 20px #fff;
	animation: ${LoaderAnimation} 1.5s ease-in-out infinite;
`
