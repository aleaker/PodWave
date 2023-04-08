import styled from "styled-components"
import DisplayCard from "components/general/DisplayCard/DisplayCard"

export const StyledDisplayCard = styled(DisplayCard)`
	margin-top: 80px;
	justify-content: flex-end;
`

export const PodcastLogo = styled.img`
    position: absolute;
    height: 160px;
    border-radius: 50%;
    object-fit: scale-down;
    top: -50%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}
`

export const TextContainer = styled.div`
	height: 60%;
	display: flex;
	flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
`

export const Title = styled.span``

export const AuthorData = styled.span``
