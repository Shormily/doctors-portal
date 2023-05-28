import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import { firebaseConfig } from "../../../../Firebase/Firebase.config";
import { Elements } from "@stripe/react-stripe-js";
import Loading from '../../Shared/Navbar/Loading/Loading';
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(firebaseConfig.stripe);
// console.log(stripePromise)

const Payment = () => {
  const booking = useLoaderData();
  const navigation =  useNavigate();
  const {treatment,price,appointmentDate,slot} = booking;
  if(navigation.state === "loading"){
    return<Loading></Loading>
  }
  // const stripePromise = loadStripe()
  console.log("booking data", booking);
  return (
    <>
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p className="text-xl">Please Pay ${price} for your appointment on {appointmentDate} at {slot}</p>
      <div className="w-96 my-12">
   <Elements stripe={stripePromise}>
      <CheckOut
      booking={booking}
      />
    </Elements>
   </div>
    </>
  );
};

export default Payment;
