import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import { IoLogInSharp } from "react-icons/io5";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGoodreadsG,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logos from "../../assets/images/logos.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
       
     
  return (
    <>
       <div className="w-full  min-h-[60px] mb-24 flex justify-center shadow-lg    items-center  absolute z-20 text-slate-950 font-semibold bg-white ">
        
       <img className=" p-3" src={logos} alt="" />
        <ul className="hidden sm:flex px-4 p-4 mt-1 ">
          <li className="mx-4" >
            <NavLink as={NavLink}  to="/">Home</NavLink>
          </li>
          <li className="mr-4">
            <NavLink  as={NavLink}  to="/about">AboutUS</NavLink>
          </li>
         
          <li className="mr-4">
            <NavLink as={NavLink}  to="/apoinment">Appointment</NavLink>
          </li>
         
          {/* <li className="mr-4" >
            <NavLink as={NavLink}  to="/dashboard">Dashboard</NavLink>
          </li> */}
       
          <li  className="mr-4">
            <NavLink as={NavLink}  to="/contact">Contact</NavLink>
          </li>
         <li className="mr-4 " >
          {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between "
                  to="/login  "
                  onClick={handleLogOut}
                >
                  SignIn
                   <IoLogInSharp className="mx-2 mt-1" size="20" />
                </NavLink>
              )}
        {user?.email && (
                <NavLink
                  onClick={logOut}
                  className="flex justify-between "
                  to="/signup  "
                  as={NavLink}
                >
                  SignOut
                   <IoLogInSharp className="mx-2 mt-1" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img className=" w-9 h-9 rounded-full  " src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </NavLink>
              )}
          </li> 
        </ul>
        
        {/* <div className="flex justify-between">
          <FaFacebookF className="mx-4" />
          <FaTwitter className="mx-4" />
          <FaGoodreadsG className="mx-4" />
          <FaInstagram className="mx-4" />
        </div> */}
        <div  onClick={handleNav}  className="sm:hidden z-10">
          <FaBars size={30} className="mr-4 cursor-pointer" />
        </div>
        {/* Mobile Menu */}
        <div
         onClick={handleNav}
          className={
           nav?
           
           "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex flex-col" 
           
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
          }
        >
          <ul className="h-full w-full text-center pt-18">
             <li className="text-2xl py-4">
             <NavLink as={NavLink}  to="/">Home</NavLink>
            </li>
            <li className="text-2xl py-4">
            <NavLink  as={NavLink}  to="/about">AboutUS</NavLink>
            </li>
            <li className="text-2xl py-4">
            <NavLink as={NavLink}  to="/service">Service</NavLink>
            </li>
            <li className="text-2xl py-4">
            <NavLink as={NavLink}  to="/dashboard">Dashboard</NavLink>
            </li>
            
            <li className="text-2xl py-3">
            <NavLink as={NavLink}  to="/contact">Contact</NavLink>
            </li> 
            <li className="text-2xl py-3" >
          {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between "
                  to="/sign  "
                >
                  SignIn <IoLogInSharp className="mx-2" size="20" />
                  
                </NavLink>
              )}
        {user?.email && (
                <NavLink
                  onClick={logOut}
                  className="flex justify-between "
                  to="/sign  "
                  as={NavLink}
                >
                  SignOut
                   <IoLogInSharp className="mx-2" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img className=" w-9 h-9 rounded-full " src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </NavLink>
              )}
          </li> 
            {/* <li className="text-2xl py-4">
            {!user?.email && (
                <NavLink
                  as={NavLink}
                  className=" text-light flex justify-between "
                  to="/sign  "
                >
                  SignIn <IoLogInSharp className="mx-2" size="20" />
                </NavLink>
              )}
        {user?.email && (
                <NavLink
                  onClick={logout}
                  className="flex justify-between "
                  to="/sign  "
                  as={NavLink}
                >
                  SignOut <IoLogInSharp className="mx-2" size="20" />
                  <span>
                    {user?.photoURL ? (
                      <img className=" w-8 h-8 " src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ms-3">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </NavLink>
              )}
            </li>  */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
