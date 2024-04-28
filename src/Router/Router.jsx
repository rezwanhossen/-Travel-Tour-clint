import { createBrowserRouter } from "react-router-dom";
import AddTourists from "../Components/Pages/AddTourists/AddTourists";
import Updatetourists from "../Components/Pages/AddTourists/Updatetourists";
import AllTurestSport from "../Components/Pages/AllTurestSport/AllTurestSport";
import Blogdet from "../Components/Pages/Blog/Blogdet";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Login/Register";
import MyList from "../Components/Pages/MyList/MyList";
import VewditalTspot from "../Components/Pages/TouristSpots/VewditalTspot";
import Error from "../Error/Error";
import PrivetRout from "../PrivetRout/PrivetRout";
import Root from "../Root/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtourists",
        element: (
          <PrivetRout>
            <AddTourists></AddTourists>{" "}
          </PrivetRout>
        ),
      },
      {
        path: "/updateturists/:id",
        element: <Updatetourists></Updatetourists>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/singledata/${params.id}`),
      },

      {
        path: "/mylist",
        element: (
          <PrivetRout>
            <MyList></MyList>
          </PrivetRout>
        ),
      },
      {
        path: "/allturestsport",
        element: <AllTurestSport></AllTurestSport>,
        loader: () => fetch("http://localhost:5001/tourspot"),
      },
      {
        path: "/blogdet/:id",
        element: <Blogdet></Blogdet>,
        loader: () => fetch("../../public/blog.json"),
      },
      {
        path: "/vewditTureSpot/:id",
        element: (
          <PrivetRout>
            <VewditalTspot></VewditalTspot>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/singledata/${params.id}`),
      },
    ],
  },
]);
export default router;
