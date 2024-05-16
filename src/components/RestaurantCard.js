import { CDN_URL } from "../utils/constants"; //named export

const RestaurantCard = (props) => {
  const { resdata } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resdata?.info;
  const veg = resdata?.info?.veg;
  //console.log(veg);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64 h-96 flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg m-5">
      {veg && (
        <div className="absolute top-0 left-0 bg-green-500 text-white px-6 py-1 rounded-tl-lg rounded-br-lg">
          Veg
        </div>
      )}
      <img
        className="w-full h-40 object-cover object-center mb-4 rounded-t-lg "
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <h4 className="text-gray-700 text-base">{cuisines.join(", ")}</h4>
        </div>
        <div>
          <h4 className="text-gray-700 text-base">Rating: {avgRating} ⭐</h4>
          <h4 className="text-gray-700 text-base">
            Cost for two: {costForTwo}
          </h4>
          <h4 className="text-gray-700 text-base">Area : {areaName}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
