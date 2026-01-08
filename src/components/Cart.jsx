import { useSelector, useDispatch } from "react-redux";
import {
  removeToCart,
  increaseQty,
  decreaseQty,
} from "./Redux/CartSlice";

const Cart = ({ close }) => {
  const cart = useSelector(state => state.cart.items);


  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


  return (
    <div className="cart-overlay" onClick={close}>
      <div
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={close}>❌</button>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="cart-img"
            />

            <p>
              {item.title} – ₹{item.price} × {item.qty}
            </p>

            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <button onClick={() => dispatch(removeToCart(item.id))}>
              Remove
            </button>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

export default Cart;
