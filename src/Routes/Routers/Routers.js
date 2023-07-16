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
import Service from "../../Pages/Services/Service";
import EyeExam from "../../Pages/Services/EyeExam";
import Diagonisis from "../../Pages/Services/Diagonisis";
import Layereye from "../../Pages/Services/Layereye";
import Doctorprofil from "../../Pages/Appointmentmega/Doctorprofil";
import Generalinfo from "../../Pages/Appointmentmega/Generalinfo";
import Working from "../../Pages/Appointmentmega/Working";
import FAQ from "../../Pages/Appointmentmega/FAQ";
import Hospital from "../../Pages/Appointmentmega/Hospital";

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
        path: "/doctorprofil",
        element: <Doctorprofil></Doctorprofil>,
      },
      {
        path: "/generalinfo",
        element: <Generalinfo></Generalinfo>,
      },
      {
        path: "/working",
        element: <Working></Working>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/hospitalinfo",
        element: <Hospital></Hospital>,
      },
      {
        path: "/service",
        element:<PrivateRoute><Service></Service></PrivateRoute> ,
      },
      {
        path: "/eyeexam",
        element:<PrivateRoute><EyeExam></EyeExam></PrivateRoute> ,
      },
      {
        path: "/diagonisis",
        element:<PrivateRoute><Diagonisis></Diagonisis></PrivateRoute> ,
      },
      {
        path: "/layereye",
        element:<PrivateRoute><Layereye></Layereye></PrivateRoute> ,
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
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>, 
      },
      {
        path:'/dashboard/addoctors',
       
        element:<AdminRoute><AddDoctor></AddDoctor> </AdminRoute>,  
      },
      {
        path:'/dashboard/managedoctors',
        element:<AdminRoute><ManageDoctor></ManageDoctor> </AdminRoute>, 
       
      },
      {
        path:'/dashboard/payment/:id',
        element:<Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),

       
      },
    ]   
  }
]);

export default router;
