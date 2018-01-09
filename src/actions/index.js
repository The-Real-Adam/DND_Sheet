export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED'
export function fetchProducts() {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8082/api/products`)
    const json = await response.json()
    dispatch({
      type: PRODUCTS_RECEIVED,
      products: json._embedded.products
    })
  }
}

export const ITEMS_RECEIVED = 'ITEMS_RECEIVED'
export function fetchItems() {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8082/api/items`)
    const json = await response.json()
    dispatch({
      type: ITEMS_RECEIVED,
      items: json._embedded.items
    })
  }
}

export const ITEM_CREATED = 'ITEM_CREATED'
export function createItem(quantity, product) {
  return async (dispatch) => {
    const response = await fetch(product._links.items.href, {
      method: 'POST',
      body: JSON.stringify({ quantity: quantity }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const createdItem = await response.json()
    dispatch({
      type: ITEM_CREATED,
      item: createdItem,
    })
  }
}
