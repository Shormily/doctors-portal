import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../hook/useToken";
import issueToken from "../../../lib/issueToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user, loading } = useContext(AuthContext);
  const { signIn, signInUsingGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState('');
  //const [token] = useToken(loginUserEmail)
  //console.log(token)
  const location = useLocation();
  const navigate = useNavigate();
   
 

  const from = location.state?.from?.pathname || "/";
  const handleLogin = async (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        const token = issueToken(data.email);
        console.log(token);
        if(token){
          navigate(from, { replace: true });
          toast.success("successfully Log in");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      // toast.success("successfully Log in");
    }
  }, [user]);
  // const hanldeGoogleLogin = () => {
  //   signInUsingGoogle();
  // };

  return (
    <>
      <div className="h-[700px]  flex justify-center items-center">
        <div className="w-96 p-7">
          <h1 className="text-3xl">Login </h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label"></label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs mb-1"
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"></label>
              <input
                {...register("password", {
                  required: "Password Address is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charecters or longer",
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
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
              <label className="label">
                <span className="label-text">Forgot password ?</span>
              </label>
            </div>

            <input
              className="btn btn-accent w-full text-white"
              value="Login"
              type="submit"
            />

            <p>
              You have no account ?{" "}
              <Link className="text-accent" to="/signup">
                {" "}
                Create new account !
              </Link>
            </p>

          
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
