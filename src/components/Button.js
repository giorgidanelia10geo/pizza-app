import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ onClick, children, className, outline }) => {

	return (
		<button onClick={onClick} className={classNames('button', className, {
			'button--outline': outline,
		})}>
			{children}
		</button>
	)
}

Button.propoTypes = {
	children: PropTypes.string.required,
	className: PropTypes.string.required,
	outline: PropTypes.string.required
}

export default Button
