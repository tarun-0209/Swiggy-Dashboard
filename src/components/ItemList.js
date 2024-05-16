import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addIdem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const AddItem = (item) => {
    dispatch(addIdem(item));
  };
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border p-3 rounded-md bg-white flex justify-between"
        >
          <div className="flex justify-start flex-col items-start">
            <span className="font-semibold">{item.card.info.name}</span>
            <span className="font-semibold">
              ₹{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <p className="text-gray-500 mt-2 text-start">
              {item.card.info.description}
            </p>
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border"
              onClick={() => AddItem(item)}
            >
              Add to Cart
            </button>
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className=" w-28 h-28 object-cover object-center rounded-t-lg"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
