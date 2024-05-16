import { LOGO_URL } from "../utils/constants"; //named import
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  //if no dependency array => useEffect is called on every Render
  //if dependency array is empty => useEffect is called only once initially
  //if dependency array is not empty => useEffect is called everytime the value inside the array is changed
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  // const { loggedInUser } = useContext(UserContext);
  //give us access to the store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg p-2 items-center">
      <div className="logo-container ">
        <img className="w-16" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="flex gap-3 justify-center font-medium items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/Grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/Cart"}>Cart({cartItems.length})</Link>
            {/*console.log(cartItems);*/}
          </li>
          {/*<li>{loggedInUser}</li>*/}
          <button
            className="border border-solid border-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
