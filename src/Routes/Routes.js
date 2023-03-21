import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Users from "../Components/Users/Users";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("http://localhost:3000/users");
        },
      },
      { path: "about", element: <About></About> },
      { path: "users", element: <Users></Users> },
      { path: "*", element: <PageNotFound></PageNotFound> },
    ],
  },
]);

export default router;
