import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPizzas } from '../redux/actions/pizzas'
import { Categories, SortPopup, Pizzas, LoadingPizza } from './index'
import { setCategory, setSort } from '../redux/actions/filters'
import { addPizzaToCart } from '../redux/actions/cart'

const categories = ['ხორცით', 'სამარხო', 'ცხარე', 'დახურული']

const popupItems = [
  { name: 'პოპულარული', type: 'popular', order: 'desc' },
  { name: 'ფასის მიხედვით', type: 'price', order: 'desc' },
  { name: 'ალფავიტის მიხედვით', type: 'name', order: 'asc' }
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [dispatch, category, sortBy])

  const onSelectCategoty = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortBy = React.useCallback(type => {
    dispatch(setSort(type))
  }, [])

  const handleAddPizzaToCart = pizza => {
    dispatch(addPizzaToCart(pizza))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          menuItems={categories}
          onClickCategory={onSelectCategoty}
        />
        <SortPopup
          popupItems={popupItems}
          activeSortBy={sortBy.type}
          onClickSortType={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">ყველა</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => (
            <Pizzas
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addCountPizza={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />
          ))
          : Array(12).fill(0).map((_, idx) => <LoadingPizza key={idx} />)}
      </div>
    </div>
  )
}

export default Home
