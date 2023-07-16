import React from "react";
import um from "../assets/images/um.jpg";
import rb from "../assets/images/rb.png";
import docts from "../assets/images/docts.jpg";
import ub from "../assets/images/me.jpg";

const Cards = () => {
  return (
    <>
    
      
    <div className="max-w-[1400px] mb-20 gap-8   mt-20 m-auto flex justify-center item-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
     
     <div className="max-w-sm rounded overflow-hidden shadow-lg">
       <img class="w-full" src={um} alt="Sunset in the mountains" />
       <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
         <p class="text-gray-700 text-base">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Voluptatibus quia, nulla! Maiores et perferendis eaque,
           exercitationem praesentium nihil.
         </p>
       </div>
       <div class="px-6 pt-4 pb-2">
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           #photography
         </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           #travel
         </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           #winter
         </span>
       </div>
     </div>
     <div className="max-w-sm rounded overflow-hidden shadow-lg">
       <img className="w-full bg-gray-200 " src={rb} alt="Sunset in the mountains" />
       <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
         <p class="text-gray-700 text-base">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Voluptatibus quia, nulla! Maiores et perferendis eaque,
           exercitationem praesentium nihil.
         </p>
       </div>
       <div class="px-6 pt-4 pb-2">
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
           #photography
         </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
           #travel
         </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
           #winter
         </span>
       </div>
     </div>
     <div className="max-w-sm rounded overflow-hidden shadow-lg">
       <img className="w-full " src={ub} alt="Sunset in the mountains" />
       <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
         <p class="text-gray-700 text-base">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Voluptatibus quia, nulla! Maiores et perferendis eaque,
           exercitationem praesentium nihil.
         </p>
       </div>
       <div class="px-6 pt-4 pb-2">
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
           #photography
         </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
           #travel
         </span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
           #winter
         </span>
       </div>
     </div>
    
   </div>
    
    </>
  
  );
};

export default Cards;
