import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const menus = [
    { name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Home", link: "/", icon: AiOutlineUser },
    { name: "messages",  icon: FiMessageSquare },
    { name: "analytics",  icon: TbReportAnalytics, margin: true },
    { name: "File Manager", icon: FiFolder },
    { name: "Cart",  icon: FiShoppingCart },
    { name: "Saved",  icon: AiOutlineHeart, margin: true },
    { name: "Setting",  icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
      <section className="flex gap-6 sidebar h-full">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-5`} 
      >
        <div className="py-3 flex justify-end " >
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        Dashboard
      </div>
    </section>
    </>
  );
};

export default Sidebar;








// import React, { useState } from "react";
// import "./Sidebar.css";
// import logos from "../Image/logos.png";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../Dashboard/Data";
// import { UilBars } from "@iconscout/react-unicons";
// import { motion } from "framer-motion";


// const Sidebar = () => {
//   const [selected, setSelected] = useState(0);

//   const [expanded, setExpaned] = useState(true)
 

  

  
   

//   const sidebarVariants = {
//     true: {
//       left : '0'
//     },
//     false:{
//       left : '-60%'
//     }
//   }
//   console.log(window.innerWidth)
//   return (
//     <>
//        <div className="bars" style={expanded?{left: '5%'}:{left: '4%'}} onClick={()=>setExpaned(!expanded)}>
//         <UilBars />
//       </div>
//     <motion.div className='sidebar'
//     variants={sidebarVariants}
//     animate={window.innerWidth<=768?`${expanded}`:''}
//     >
//       {/* {logo} */}
//       <div className="logo">
//         <img src={logos} alt="logo" />
//         <span>
//           Sh<span>o</span>ps
//         </span>
//       </div>

//       <div className="menu">
//         {SidebarData.map((item, index) => {
//           return (
//             <div
//               className={selected === index ? "menuItem active" : "menuItem"}
//               key={index}
//               onClick={() => setSelected(index)}
//             >
//               <item.icon />
//               <span>{item.heading}</span>
//             </div>
//           );
//         })}
//         {/* {signoutIcon} */}
//         <div className="menuItem">
//           <UilSignOutAlt />
//         </div>
//       </div>
//     </motion.div> 
    
//     </>
//   );
// };

// export default Sidebar;