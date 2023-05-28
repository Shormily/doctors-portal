import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Navbar/Loading/Loading";
import app, { firebaseConfig } from "../../../../Firebase/Firebase.config";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const imageHostkey = firebaseConfig.imgbb;
  const navigate = useNavigate();
  // console.log(imageHostkey);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleDoctor = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const forData = new FormData();
    forData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
    fetch(url, {
      method: "POST",
      body: forData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // save doctor information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessTken")}`,
            },
            body:JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(result =>{
            console.log(result)
            toast.success(`${data.name} is added successfully`);
            navigate('/dashboard/managedoctors')
          })
        }
      });
  };

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpeciality");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <h1 className="text-4xl">AddDoctor</h1>
      <div className="h-[700px]  flex justify-center items-center">
        <div className="w-96 p-7">
          <form onSubmit={handleSubmit(handleDoctor)}>
            <div className="form-control w-full max-w-xs">
              <input
                {...register("name", {
                  required: "name  is required",
                })}
                placeholder="Name"
                className="input input-bordered w-full max-w-xs mb-3 "
              />
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs mb-3"
              />
             
            </div>
            <div className="form-control w-full max-w-xs">
              <select
                {...register("specialty")}
                class="select select-secondary w-full max-w-xs"
              >
                <option disabled selected>
                  Please Select a Doctor
                </option>
                {specialties.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
              <div className="from-control w-full max-x-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("image", {
                    required: "Photo is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.img && (
                  <p className="text-red-500">{errors.img.message}</p>
                )}
              </div>
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password?.message}
                </p>
              )}

              <label className="label">
                <span className="label-text">Forgot password ?</span>
              </label>
            </div>
            <input
              className="btn btn-accent w-full text-white"
              value="ADD Doctor"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
