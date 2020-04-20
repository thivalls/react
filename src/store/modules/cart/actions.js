export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function changeAmountRequest(id, action) {
  return {
    type: `@cart/CHANGE_AMOUNT_REQUEST`,
    id,
    action,
  };
}

export function changeAmountSuccess(id, type) {
  return {
    type: `@cart/${type}`,
    id,
  };
}
