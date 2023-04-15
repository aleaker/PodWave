import TextLink from "components/general/TextLink/TextLink"

import NotFoundIlustration from "images/NotFoundIlustration.png"

import ROUTES from "constants/routes"

import { Container, StyledImage } from "./NotFound.styles"

const NotFound = () => {
	return (
		<Container>
			<StyledImage alt="Ilustration for a not found page" src={NotFoundIlustration} />
			<h2>Looks like you are lost</h2>
			<TextLink to={ROUTES.LANDING}>
				<h3>go back to the landing page</h3>
			</TextLink>
		</Container>
	)
}

export default NotFound
