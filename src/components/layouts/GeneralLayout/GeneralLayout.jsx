import { Outlet } from "react-router-dom"

import Header from "components/layouts/Header/Header"

import { LayoutContainer } from "./GeneralLayout.styles"

const GeneralLayout = () => {
	return (
		<LayoutContainer>
			<Header />
			<Outlet />
		</LayoutContainer>
	)
}

export default GeneralLayout
