import styled, { keyframes } from "styled-components"

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid;
	padding: 20px 5px 10px 5px;
	margin-bottom: 20px;
`

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
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: blue;
	box-shadow: 0 0 15px #fff;
	animation: ${LoaderAnimation} 1.5s ease-in-out infinite;
`
