import { createBrowserRouter,RouterProvider,}from "react-router-dom";
import Homepage from "../Homepage";
import AdDetails from "../Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
        path: "/details/:adId",
        element: <AdDetails/>,
      }
  ]);


  function Router(){
  return <RouterProvider router={router} />
  }
  export default Router;