export const addPizzaToCart = pizza => ({
  type: 'ADD_PIZZA_TO_CART',
  payload: pizza
})

export const clearFromCart = () => ({
  type: 'CLEAR_CART',
})

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id
})

export const minusCartItem = id => ({
  type: 'MINUS_CART_ITEM',
  payload: id
})

export const plusCartItem = id => ({
  type: 'PLUS_CART_ITEM',
  payload: id
})