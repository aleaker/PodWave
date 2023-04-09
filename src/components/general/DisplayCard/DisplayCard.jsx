import PropTypes from "prop-types"

import { DisplayCardContainer } from "./DisplayCard.styles"

const DisplayCard = ({ href, children, className }) => {
	return (
		<DisplayCardContainer $isClickable={href} className={className}>
			{children}
		</DisplayCardContainer>
	)
}

DisplayCard.defaultProps = {
	href: "",
	className: "",
}

DisplayCard.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
}

export default DisplayCard
