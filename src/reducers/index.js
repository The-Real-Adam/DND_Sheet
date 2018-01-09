import { combineReducers } from 'redux'
import { ITEMS_RECEIVED, PRODUCTS_RECEIVED, ITEM_CREATED } from '../actions'

function items(state = { all: [] }, action) {
  switch (action.type) {
    case ITEMS_RECEIVED:
      return {
        ...state,
        all: action.items
      }
    case ITEM_CREATED:
      return {
        ...state,
        all: [
          action.item,
          ...state.all,
        ]
      }
    default:
      return state
  }
}

function products(state = { byId: {}, all: [] }, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      const productsById = action.products.reduce((result, product) => {
        result[product.id] = product
        return result
      }, {})

      return {
        ...state,
        byId: productsById,
        all: action.products
      }
    default:
      return state
  }
}

export default combineReducers({
  items,
  products,
})
