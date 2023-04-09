import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

import { DisplayCardContainer } from "./DisplayCard.styles"

const DisplayCard = ({ href, children, className }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		if (href) {
			navigate(href)
		}
	}

	return (
		<DisplayCardContainer onClick={handleClick} $isClickable={href} className={className}>
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
