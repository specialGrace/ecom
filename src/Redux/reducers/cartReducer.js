const initialState = {
    items: [],
    total: 0,
    subtotal:0
  };

  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const totally = state.total + action.payload.price;
        return {
          ...state,
          items: [...state.items, action.payload],
          total: totally,
          subtotal: totally
        };

      case 'REMOVE_FROM_CART':
        const newItems = state.items.filter(item => item.id !== action.payload.id);
        const removedItem = state.items.find(item => item.id === action.payload.id);
  const removedItemTotal = removedItem ? removedItem.price * removedItem.quantity : 0;

  return {
    ...state,
    items: newItems,
    total: state.total - removedItemTotal,

    subtotal: state.subtotal - removedItemTotal,
  };

        case 'UPDATE_QUANTITY':
             const updatedItems = state.items.map((item) => {
               if (item.id === action.payload.productId) {
                return { ...item, quantity: action.payload.newQuantity };
              }
              return item;
             });
             const newTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);;
             const newSubtotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

             return {
              ...state,
              items: updatedItems,
              total: newTotal,
              subtotal: newSubtotal,
            };

            case 'LOAD_SAVED_CART':
                return {
                  ...action.payload,
                };
                case 'CLEAR':

                  return initialState;
      // More cases for updating quantity, etc.
      default:
        return state;
    }
  };

  export default cartReducer;
