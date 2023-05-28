import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../hook/useToken";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, signInUsingGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('')
  const { user,  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [createUserEmail, setCreateUserEmail] = useState('')
  const [token] = useToken(createUserEmail);
  const from = location.state?.from?.pathname || '/';
  
  if(token){
    navigate('/')
  }
  const handleSignUp = (data) => {
    setSignUpError('')
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        toast.success('User Created Successfully');
        navigate(from, {replace:true});
       
  
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
        .then(() =>{
        
         saveUser(data.name, data.email);
        })
        .catch(err => console.log(err))
      })
      .catch((error) => 
     { console.log(error)
      setSignUpError(error.message)}
      )
      
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      // toast.success("successfully Sign out");
    }
  }, [user]);
  

  const hanldeGoogleLogin = () => {
 
    signInUsingGoogle();
   
    
  };

  const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log('save user',data);
      setCreateUserEmail(email);
      // navigate('/');
    })
  }


  return (
    <>
      <div className="h-[700px]  flex justify-center items-center">
        <div className="w-96 p-7">
          <h1 className="text-3xl mb-5">Sign Up </h1>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <input
                {...register("Name", {
                  required: "Name  is required",
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
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                {...register("password", {
                  required: "Password Address is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charecters or longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase number and special characters ",
                  },
                })}
                placeholder="Passowrd"
                className="input input-bordered w-full max-w-xs mb-1"
              />
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password?.message}
                </p>
              )}

              {signUpError && <p className="text-red-600">{signUpError}</p>}
              <label className="label">
                <span className="label-text">Forgot password ?</span>
              </label>
            </div>
           
            <input
              className="btn btn-accent w-full text-white"
              value="SignUp"
              type="submit"
            />
            <p>
              You have an account ?{" "}
              <Link className="text-accent" to="/login">
                {" "}
                Please Log In !
              </Link>
            </p>

            <div className="divider">OR</div>
            <button onClick={hanldeGoogleLogin} className="btn btn-dark w-full text-white">
              Continue as google login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
