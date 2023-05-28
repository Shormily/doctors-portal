import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import About from "../../Pages/Home/About/About";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Dashboard from "../../Pages/Home/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Appointment from "../../Pages/Home/Appoinment/Appoinment";
import MyAppointment from "../../Pages/Home/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Home/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Home/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Home/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../../Pages/Home/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Home/Shared/Navbar/DisplayError/DisplayError";
import Contact from "../../Pages/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/apoinment",
        element:<PrivateRoute><Appointment></Appointment></PrivateRoute> ,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path:"/dashboard",
    errorElement:<DisplayError></DisplayError>,
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'/dashboard',
        element:<MyAppointment></MyAppointment>
      },
      {
        path:'/dashboard/allusers',
        // element:  <AllUsers></AllUsers> 
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>  
      },
      {
        path:'/dashboard/addoctors',
       
        element:<AdminRoute><AddDoctor></AddDoctor> </AdminRoute>  
      },
      {
        path:'/dashboard/managedoctors',
        element:<AdminRoute><ManageDoctor></ManageDoctor> </AdminRoute> 
       
      },
      {
        path:'/dashboard/payment/:id',
        element:<AdminRoute><Payment></Payment> </AdminRoute> ,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)

       
      },
    ]   
  }
]);

export default router;
