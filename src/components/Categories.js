import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({ activeCategory, menuItems, onClickCategory }) => {

	return (
		<div className="categories">
			<ul>
				<li
					className={activeCategory === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}
				>
					ყველა
				</li>
				{menuItems &&
					menuItems.map((item, idx) => (
						<li
							className={activeCategory === idx ? 'active' : ''}
							onClick={() => onClickCategory(idx)}
							key={`${item} ${idx}`}
						>
							{item}
						</li>
					))}
			</ul>
		</div>
	)
})

Categories.propTypes = {
	activeCategory: PropTypes.number,
	menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func,
}

Categories.defaultProps = {
	activeCategory: null,
	menuItems: []
}


export default Categories
