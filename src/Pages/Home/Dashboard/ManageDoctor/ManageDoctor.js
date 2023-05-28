import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import React, { useState } from 'react';
import ConfirmationModal from "../../Shared/Navbar/ConfirmationModal/ConfirmationModal";

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState (null);

   
  const { data: doctors,isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleDeleteDoctor = doctor =>{
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
        method:'DELETE',
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount > 0){
        refetch()
        toast.success(`Doctor ${doctor.name} deleted Successfully`)
      }
       
    })
}

  const closeModal = () =>{
    setDeletingDoctor(null)
  }
  return (
    <>
      <h1 className="text-4xl">Manage Doctors:{doctors?.length}</h1>
      <div className="pt-8">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>1</th>
                <th>Face and Name</th>

                <th>Email</th>
                <th>Specialisty</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {doctors?.length &&
                doctors?.map((doctor, i) => (
                  <tr key={doctor._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>

                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={doctor.image}
                              className="rounded-full"
                              alt="Avatar Tailwind CSS Component "
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{doctor.name}</div>
                        </div>
                      </div>
                    </td>

                    <td>{doctor.email}</td>
                    <td>{doctor.specialty}</td>
                    <th>
                      <label 
                      onClick={() => setDeletingDoctor(doctor)}
                      for="confirmation-modal" className="btn btn-ghost  btn-xs">
                      Delete
                      </label>
                     
                    </th>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
        {
          deletingDoctor && <ConfirmationModal
          title={`Are you sure you want to delete ?`}
          successAction = {handleDeleteDoctor}
          message={`If you delete ${deletingDoctor.name}. It cannot be undone`}
          modalData={deletingDoctor}
          closeModal={closeModal}
          successButtonName="Delete"
          >

          </ConfirmationModal>
        }
      </div>
    </>
  );
};

export default ManageDoctor;
