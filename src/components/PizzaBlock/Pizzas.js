import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import lariIcon from '../../assets/img/lari.png'
import Button from '../Button'

const Pizzas = ({ id, name, imageUrl, sizes, price, types, onClickAddPizza, addCountPizza }) => {
  const availableTypes = ['თხელი', 'ტრადიციული']
  const availableSizesTypes = ['პატარა', 'საშუალო', 'დიდი']

  const [availablePizza, setAvailablePizza] = React.useState(types[0])
  const [availableSize, setAvailableSize] = React.useState(0)

  const onSelectType = index => {
    setAvailablePizza(index)
  }

  const onSelectSizes = index => {
    setAvailableSize(index)
  }

  const onAddPizza = () => {
    const pizzaObj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizesTypes[availableSize],
      type: availableTypes[availablePizza]
    }
    onClickAddPizza(pizzaObj)
  }

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              onClick={() => onSelectType(index)}
              className={classNames({
                active: availablePizza === index,
                disabled: !types.includes(index)
              })}
              key={`${type} ${index}`}
            >
              {type}
            </li>
          ))
          }
        </ul>
        <ul>
          {availableSizesTypes.map(((size, index) => (
            <li
              onClick={() => onSelectSizes(index)}
              className={classNames({
                active: availableSize === index,
                disabled: !sizes.includes(index),
              })}
              key={`${size} ${index}`}
            >
              {size}
            </li>
          )))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="pizza-block__price">{price}</div>
          <img src={lariIcon} alt={"lariIcon"} style={{ height: 25 }} />
        </div>
        <Button
          onClick={onAddPizza}
          className="button button--outline button--add"
          outline
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>დამატება</span>
          {addCountPizza && <i>{addCountPizza}</i>}
        </Button>
      </div>
    </div>
  )
}

Pizzas.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickAddPizza: PropTypes.func,
  addCountPizza: PropTypes.number,
}

Pizzas.defaultProps = {
  name: 'No name',
  imageUrl: 'No image',
  sizes: [],
  price: 0,
  types: [],
}

export default Pizzas
