import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider';

const DisplayError = () => {
    const {  logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
    const error = useRouteError()
    return (
        <>
           <p className='text-red-800 text-2xl'>Somthin went wrong!!</p> 
           <p className='text-red-400 text-2xl'>{error.statusText || error.message}</p> 
           <h4 className=' text-3xl'>Please <button onClick={handleLogOut} to="/login" >Sign Out</button> and Log back in  </h4> 
        </>
    );
};

export default DisplayError;