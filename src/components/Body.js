import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react"; // to create state variables (stores state of a variable)
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import UserContext from "../utils/UserContext";
const Body = () => {
  //local state-variable
  //const[name of variable, function to modify variable]= useState(data);
  const [resListNew, setresList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //callback function
  //this func will be called only after this body component is rendered
  useEffect(() => {
    fetchData();
    //console.log("useeffect called");
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //custom hook
  const online_Status = useOnlineStatus();
  if (online_Status === false) return <h1>Looks like You are OFFLINE!!!</h1>;

  //body user-context
  //const { loggedInUser } = useContext(UserContext);
  return resListNew.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body p-3">
      <div className="filter p-2">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-10"
          onClick={() => {
            //functionNameToModify(newdata);
            const topRestaurants = resListNew.filter(
              (rest) => rest.info.avgRating > 4
            );
            setFilteredRestaurant(topRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          className="border border-solid border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            //console.log(searchText);
            const filteredRestaurant = resListNew.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        {/*<div className=" font-bold">{loggedInUser}</div>*/}
      </div>
      <div className="flex  flex-wrap justify-center">
        {
          filteredRestaurant.map((restaurantt) => (
            <Link
              to={"/Restaurants/" + restaurantt.info.id}
              key={restaurantt.info.id}
            >
              <RestaurantCard resdata={restaurantt} />
            </Link>
          )) //key is important, looping on array of components
        }
      </div>
    </div>
  );
};
export default Body;
