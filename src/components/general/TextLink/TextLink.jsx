import PropTypes from "prop-types"

import { StyledLink } from "./TextLink.styles"

const TextLink = ({ children, className, ...rest }) => {
	return (
		<StyledLink className={className} {...rest}>
			{children}
		</StyledLink>
	)
}

TextLink.defaultProps = {
	className: "",
}

TextLink.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
	className: PropTypes.string,
}

export default TextLink
