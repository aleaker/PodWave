import PropTypes from "prop-types"

import { DisplayCardContainer } from "./DisplayCard.styles"

const DisplayCard = ({ href, children, ClassName }) => {
	return (
		<DisplayCardContainer $isClickable={href} ClassName={ClassName}>
			{children}
		</DisplayCardContainer>
	)
}

DisplayCard.defaultProps = {
	href: "",
	ClassName: "",
}

DisplayCard.propTypes = {
	children: PropTypes.element.isRequired,
	ClassName: PropTypes.string,
	href: PropTypes.string,
}

export default DisplayCard
