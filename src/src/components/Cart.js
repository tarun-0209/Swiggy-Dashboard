import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return (
      total +
      (item.card.info.defaultPrice
        ? item.card.info.defaultPrice / 100
        : item.card.info.price / 100)
    );
  }, 0);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center items-center mt-3">
      <div className=" w-4/12 bg-white p-8 rounded-md shadow-md">
        <div className=" flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black border border-black"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ItemList items={cartItems} />
            <div className="flex justify-between mt-8">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">₹{totalPrice.toFixed(2)}</p>
            </div>
            <div className="mt-8">
              <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black border border-black">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
