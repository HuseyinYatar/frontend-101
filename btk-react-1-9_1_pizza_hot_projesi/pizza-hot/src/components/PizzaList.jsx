import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import { useFetch } from "../hooks/useFetch";

export default function PizzaList() {
  const {
    data: pizzas,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/pizzas");
  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas?.map((pizza) => (
          <Pizza
            key={pizza.id}
            title={pizza.title}
            description={pizza.description}
            image={pizza.image}
            price={pizza.price}
            pizza={pizza}
          />
        ))}
      </div>
    </div>
  );
}
