import React from "react";
import logos from "../assets/images/logos.png";
import { FiFacebook } from "react-icons/fi";
import { Input } from "antd";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f1f5f9]  pb-8 ">
        <div className="bg-[#f1f5f9]   flex  justify-center items-center text-slate-950 font-semibold ">
          <img className="pt-6 w-48 mb-2  " src={logos} alt="" />
        </div>
        <div className="max-w-[1040px] m-auto pb-4 ">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#d4d4d4",
              height: "1px",
              marginBottom: "30px",
            }}
          />
        </div>

        <div className="pb-8 grid lg:grid-cols-4  p-3 gap-4 flex justify-center items-center  max-w-[1030px] m-auto w-full">
          <div>
            <h1 className="font-light text-[23px] pb-8">Contact us</h1>
            <div className="flex">
              <i class="fa-solid fa-phone icn bg-[#a3a3a3]"></i>
              <p className="font-light font-semibold ">
                Call us
                <p className="font-light text-[12px] font-normal">
                  0-800-777-2331
                </p>
              </p>
            </div>
            <div className="flex">
              <i class="fa-solid fa-location icn bg-[#06b6d4]"></i>
              <p className="font-light  font-semibold  ">
                Visit us anytime
                <p className="font-light text-[12px] font-normal ">
                  27th Avenue, W2 3XE, New York
                </p>
              </p>
            </div>
            <div className="flex">
              <i class="fa-solid fa-envelope icn bg-[#1e3a8a] text-white"></i>
              <p className="font-light font-semibold ">
                Send us an email
                <p className="font-light text-[12px] font-normal ">
                  office@medicare.com
                </p>
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-light text-[23px] mb-8 ">About US</h1>
            <p className="font-light text-[12px] font-medium mb-1">About us</p>
            <p className="font-light text-[12px] font-medium mb-1">
              Our Services
            </p>
            <p className="font-light text-[12px] font-medium mb-1">
              Appointment
            </p>
            <p className="font-light text-[12px] font-medium mb-1">Location</p>
            <p className="font-light text-[12px] font-medium mb-1">Blog</p>
            <p className="font-light text-[12px] font-medium mb-1">Shop</p>
          </div>
          <div>
            <h1 className="font-light text-[23px] mt-1 ">Subscribe</h1>
            <p className=" my-3 font-light text-[12px] font-normal mt-5   ">
              Sign up for Medicare newsletter to receive all the news offers and
              discounts from Medicare eye clinic.
            </p>
            <Input
              placeholder="Type in your email address"
              className=" p-2 w-full rounded-none  max-w-xs mb-3 "
            />
            <br />
            <button className="bg-[#1e3a8a] hover:bg-[#1e40af] border-none text-white btn-sm    border border-blue-700 rounded-[3px]">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="font-light text-[23px] font mb-[34px]">
              Social Network
            </h1>
            <div className="flex">
              <i className="fa-brands fa-facebook-f icn bg-[#a3a3a3]"></i>
              <p className="font-semibold ">
                Facebook
                <p className="font-light text-[12px] font-normal">
                  www.facebook.com/medicare
                </p>
              </p>
              <br />
            </div>
            <div className="flex">
              {" "}
              <i class="fa-brands fa-twitter icn  bg-[#06b6d4]"></i>
              <p className="font-semibold ">
                Twitter
                <p className="font-light text-[12px] font-normal">#WeCare</p>
              </p>
            </div>
            <div className="flex">
              {" "}
              <i className="fa-brands fa-instagram icn bg-[#1e3a8a]"></i>
              <p className="font-semibold ">
                Instagram
                <p className="font-light text-[12px] font-normal">
                  www.instagram.com/medicare
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white mx-w-[1440px] flex justify-center items-center  min-h-[60px] mb-24 flex  shadow-lg gap-64  goglefont   absolute z-20 text-slate-950 font-semibold footer ">
        <p className="font-light text-[12px] font-normal">
          Copyright by shormily 2018. All rights reserved.
        </p>
        <ul className="hidden sm:flex px-4 p-4 mt-1 max-w-[1140] flex justify-center items-center font-normal">
          <li className="mx-4">Location</li>
          <li className="mr-4">Contact us</li>

          <li className="mr-4">Our Service</li>
          <li className="mr-4">
            Back To Page Top{" "}
            <i className="fa-sharp fa-solid fa-angles-up mx-1"></i>
          </li>

          {/* <li  className="mr-4">
            <NavLink as={NavLink}  to="/contact">Contact</NavLink>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
