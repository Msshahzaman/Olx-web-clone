import { createBrowserRouter,RouterProvider,}from "react-router-dom";
import Homepage from "../Homepage";
import AdDetails from "../Details";
import Login from "../Login/login";
import Signup from "../signup/signup";
import Sellpage from "../PostAdds/postAdd";
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";
import { Outlet } from "react-router-dom";
import AddtoCart from '../Addtocart/addtocart'

const router = createBrowserRouter([

  // {
  //   path: "/",
  //   element: <Login/>,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup/>,
  // },


  // {
  //   path: "/sellpage",
  //   element: <Sellpage/>,
  // },


  //   {
  //     path: "/dashboard",
  //     element: <Homepage/>,
  //   },
  //   {
  //       path: "/details/:adId",
  //       element: <AdDetails/>,
  //     }


{ path : '/', element : <Layout/> , children : [

  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },


  {
    path: "/salepage",
    element: <Sellpage/>,
  },


  {
    path: "/addtocart",
    element: <addtocart />,
  },

    {
      path: "/dashboard",
      element: <Homepage/>,
    },
    {
        path: "/details/:adId",
        element: <AdDetails/>,
      },

      {
        path: "/header",
        element: <Header/>,
      }
      ,
      {
        path: "/footer",
        element: <Footer/>,
      }








]}




  ]);






  function Router(){
  return <RouterProvider router={router} />
  }
  export default Router;


  function Layout() {

    return <div>
  <Header/>
  <Outlet/>
  <Footer/>
  
    </div>
  
  }