export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function changeAmount(id, type) {
  return {
    type: `@cart/${type}`,
    id,
  };
}
