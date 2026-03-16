export function CardReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const i = updatedItems.findIndex((item) => item.id === action.item.id);

    if (i > -1)
      updatedItems[i] = {
        ...updatedItems[i],
        quantity: updatedItems[i].quantity + 1,
      };
    else updatedItems.push({ ...action.item, quantity: 1 });

    return { ...state, items: updatedItems };
  } else if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.id),
    };
  } else if (action.type === "INCREASE_QUANTITY") {
    {
      const updatedItems = [...state.items];
      const i = updatedItems.findIndex((item) => item.id === action.id);
      updatedItems[i] = {
        ...updatedItems[i],
        quantity: updatedItems[i].quantity + 1,
      };
      return { ...state, items: updatedItems };
    }
  } else if (action.type === "DECREASE_QUANTITY") {
    {
      const updatedItems = [...state.items];
      const i = updatedItems.findIndex((item) => item.id === action.id);
      updatedItems[i] = {
        ...updatedItems[i],
        quantity: updatedItems[i].quantity - 1,
      };
      return { ...state, items: updatedItems };
    }
  } else {
    return state;
  }
}
