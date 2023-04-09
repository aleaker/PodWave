import styled from "styled-components"

export const DisplayCardContainer = styled.div`
	border-radius: 5px;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 25px;
	background-color: white;
	min-height: 120px;
	width: 200px;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
	${({ $isClickable }) => ($isClickable ? "cursor: pointer;" : null)}
`
