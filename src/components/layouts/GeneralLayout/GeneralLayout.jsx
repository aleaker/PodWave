import PropTypes from "prop-types"

import Header from "components/layouts/Header/Header"

import { LayoutContainer } from "./GeneralLayout.styles"

const GeneralLayout = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			{children}
		</LayoutContainer>
	)
}

GeneralLayout.propTypes = {
	children: PropTypes.element.isRequired,
}

export default GeneralLayout
