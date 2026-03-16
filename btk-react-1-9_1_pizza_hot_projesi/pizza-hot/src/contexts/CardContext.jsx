import { createContext, useReducer, useState } from "react";
import { CardReducer } from "../reducers/CardReducer";

export const CardContext = createContext();
export function CardContextProvider({ children }) {
  const [state, dispatch] = useReducer(CardReducer, { items: [] });
  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }
  function deleteItem(id) {
    dispatch({ type: "DELETE_ITEM", id });
  }

  function increaseQuantity(id) {
    dispatch({ type: "INCREASE_QUANTITY", id });
  }
  function decreaseQuantity(id) {
    dispatch({ type: "DECREASE_QUANTITY", id });
  }

  const cardcontext = {
    items: state.items,
    addItem,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CardContext.Provider value={cardcontext}>{children}</CardContext.Provider>
  );
}
