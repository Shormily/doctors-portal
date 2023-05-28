import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
      <h1 className="text-3xl">My Appoinment</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings?.length &&
              bookings?.map((booking, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.email}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.slot}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>
                    
                    {

                      booking.price && !booking.paid &&<Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary text-white btn-xs rounded-full w-24 ">PAY</button></Link>  
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
    </>
  );
};

export default MyAppointment;
