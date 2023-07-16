import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Charts from "../Charts/Charts";
import "./MyAppointment.css" 

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
   const {data: bookings = []} = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn:async () =>{
          const res = await fetch(url,{
            headers:{
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
          });
          const data = await res.json();
          console.log(data)
          return data;
      }
   })

  

  return (
    <>
    
    <div className="MainDash">
      
      <Charts/>
  
        <h1 className="text-3xl mt-24 mb-8">My Appoinment</h1>
        <div className="  bg-indigo-400 rounded-lg">
          <table className="w-full   ">
            {/* head */}
            <thead>
              <tr className="megacolor ">
                <th  className="p-3 " >No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Treatment</th>
                <th>Time</th>
                <th>Date</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody  >
              {
                bookings?.length &&
                bookings?.map((booking, i) => (
                  <tr >
                    <th className="text-center p-3 text-white">{i + 1}</th>
                    <td  className="text-center p-3 text-white">{booking.patient}</td>
                    <td  className="text-center p-3 text-white">{booking.email}</td>
                    <td  className="text-center p-3 text-white">{booking.treatment}</td>
                    <td  className="text-center p-3 text-white">{booking.slot}</td>
                    <td  className="text-center p-3 text-white">{booking.appointmentDate}</td>
                    <td>
                      
                      {
  
                        booking.price && !booking.paid &&<Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary  text-white btn-xs rounded-full w-24 ">PAY</button></Link>  
                      }
                      {
                        booking.price && booking.paid && <span className="text-danger">Paid</span>
                      }
                      
                      </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    
    </>
   
  );
};

export default MyAppointment;
