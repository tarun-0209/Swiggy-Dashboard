import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const ResMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setresInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }
  //console.log(resInfo);

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-4xl m-3 px-6 py-1.5 bg-green-200 rounded-md mw-3/12 align-middle">
        {name}
      </h1>
      <p className=" bg-yellow-100 px-6 py-1.5 rounded-md">
        <strong className="text-xl">Serves :</strong> {cuisines.join(", ")}
      </p>
      {categories.map((c) => (
        <RestaurantCategory
          key={c?.card?.card.title}
          data={c?.card?.card}
        ></RestaurantCategory>
      ))}
    </div>
  );
};

export default ResMenu;
