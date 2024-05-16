//componests should be not more than 150 lines
import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import ResMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
//import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Cart from "./components/Cart";

//lazy-loading for large codes
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  // useEffect(() => {
  //   const data = {
  //     Name: "tarun-G ",
  //   };
  //   setUserName(data.Name);
  // }, []);
  return (
    <Provider store={appStore}>
      {/*<UserContext.Provider value={{ loggedInUser: userName }}>*/}
      <div className="app">
        <Header />
        <Outlet />
      </div>
      {/*</UserContext.Provider>*/}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart></Cart>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
