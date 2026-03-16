import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import CartItem from "./CartItem";
import { useSendRequest } from "../hooks/useSendRequest";
export default function Cart() {
  const { items, deleteItem } = useContext(CardContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const { sendData, isLoading, error } = useSendRequest(
    "http://localhost:3000/orders",
  );
  const handleCheckout = async () => {
    const orderBody = {
      items: items,
      customer: "12321",
    };
    const result = await sendData({ order: orderBody });
  };
  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="cartModalLabel">
              <i className="bi bi-cart3 me-2"></i> Your Shopping Bag
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {items.length === 0 ? (
              <div className="text-center py-4">
                <i className="bi bi-cart-x fs-1 text-muted"></i>
                <p className="mt-2 text-muted">Your cart is currently empty.</p>
              </div>
            ) : (
              <ul className="list-group list-group-flush">
                {items.map((item) => (
                  <CartItem item={item} key={item.id}></CartItem>
                ))}
              </ul>
            )}
          </div>

          <div className="modal-footer d-flex justify-content-between">
            <div className="fw-bold fs-5">
              Total: {totalPrice.toFixed(2)}&#8378;
            </div>
            <div>
              <button
                type="button"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={items.length === 0 || isLoading}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
