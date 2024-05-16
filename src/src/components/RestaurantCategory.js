import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  //console.log(data);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    showItems ? setShowItems(false) : setShowItems(true);
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-8 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className=" font-bold text-lg my-3">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="my-3">🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
