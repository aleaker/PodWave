import { useLocation } from "react-router-dom"

import TextLink from "components/general/TextLink/TextLink"

import ROUTES from "constants/routes"

import { Title } from "./HeaderTitle.styles"


const HeaderTitle = () => {

    const location = useLocation()

    const isLandingPath = location.pathname === ROUTES.LANDING

    if (!isLandingPath) {
        return (
            <TextLink to={ROUTES.LANDING}>
                <Title>Podcaster</Title>
            </TextLink>
        )
    }

    return <Title>Podcaster</Title>
}

export default HeaderTitle
