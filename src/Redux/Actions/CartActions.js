export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });

  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });

export const updateQuantity = (productId, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, newQuantity },
  });

  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
