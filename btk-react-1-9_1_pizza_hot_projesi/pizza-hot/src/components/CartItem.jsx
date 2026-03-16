import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity } = useContext(CardContext);
  return (
    <>
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center px-0"
      >
        <div>
          <h6 className="mb-0">{item.title}</h6>
          <small className="text-muted">{item.price}&#8378;</small>
          <br />
          <small className="text-muted">Quantity: {item.quantity}</small>
        </div>

        {/* Action Buttons Container */}
        <div className="d-flex align-items-center gap-2">
          <div className="btn-group border rounded shadow-sm">
            {/* Minus Button */}
            <button
              className="btn btn-sm btn-light"
              onClick={() => decreaseQuantity(item.id)}
            >
              <i className="bi bi-dash-lg"></i>
            </button>

            {/* Quantity Display (optional, since it's already on the left) */}
            <span className="btn btn-sm btn-light disabled fw-bold">
              {item.quantity}
            </span>

            {/* Plus Button */}
            <button
              className="btn btn-sm btn-light"
              onClick={() => increaseQuantity(item.id)} // Re-using addItem to increment
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>

          {/* Delete/Trash Button */}
          <button
            className="btn btn-outline-danger btn-sm border-0 ms-1"
            onClick={() => deleteItem(item.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </>
  );
}

export default CartItem;
