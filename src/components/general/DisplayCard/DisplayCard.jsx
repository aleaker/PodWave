import PropTypes from "prop-types"

import { DisplayCardContainer } from "./DisplayCard.styles"

const DisplayCard = ({ children, className }) => {
	return <DisplayCardContainer className={className}>{children}</DisplayCardContainer>
}

DisplayCard.defaultProps = {
	className: "",
}

DisplayCard.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
	className: PropTypes.string,
}

export default DisplayCard
