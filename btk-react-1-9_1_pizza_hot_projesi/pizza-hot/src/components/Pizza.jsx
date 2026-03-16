import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CardContext } from "../contexts/CardContext";

export default function Pizza({ title, description, price, image, pizza }) {
  const { state } = useContext(ThemeContext);
  const { color } = state;
  const { addItem } = useContext(CardContext);

  return (
    <div className="col">
      <div className="card item">
        <img
          src={`http://localhost:3000/images/${image}`}
          alt={title}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <div className="item-price">
            <b>{price}&#8378;</b>
            <button
              className={`btn btn-sm btn-${color}`}
              onClick={() => addItem(pizza)}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
