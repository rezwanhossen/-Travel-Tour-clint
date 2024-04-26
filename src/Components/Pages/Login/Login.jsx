import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Socilmedia from "./Socilmedia";
import { useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../../Hook/useAuth";

const Login = () => {
  const [showpass, setshowpass] = useState(false);
  const [passvalid, setpassvalid] = useState("");
  const { login } = useAuth();

  const naviget = useNavigate();

  const location = useLocation();

  const form = location.state || "/";

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    setpassvalid("");
    if (password.length < 6) {
      setpassvalid("password should at 6 caracter or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setpassvalid(
        "password should Must have an Uppercase letter and a Lowercase letter"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setpassvalid(
        "password should Must have an Uppercase letter and a Lowercase letter"
      );
      return;
    }
    login(email, password)
      .then((result) => {
        if (result.user) {
          naviget(form);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div data-aos="zoom-in-up" data-aos-delay="200">
      <div className="w-full md:w-2/5 mx-auto border rounded shadow-md bg-gray-100 p-5 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="email"
            placeholder=" Email Address"
            name=""
            id=""
            {...register("email")}
            required
          />
          <br />
          <div className=" relative mb-3">
            <input
              className="w-full border rounded mb-3 px-2 py-3"
              type={showpass ? "text" : "password"}
              placeholder="password"
              name=""
              id=""
              {...register("password")}
              required
            />
            <span
              className=" absolute top-4 right-4"
              onClick={() => setshowpass(!showpass)}
            >
              {showpass ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
            </span>
          </div>
          {passvalid && <p className=" text-red-600 my-2">{passvalid} </p>}
          <input
            className="w-full border font-bold btn btn-secondary outline rounded mb-3 px-2 py-3"
            type="submit"
            value="Login"
          />
        </form>

        <p className="text-center">
          Do not have an Account ?
          <Link className=" font-bold text-indigo-500" to="/register">
            Register
          </Link>
        </p>
        <Socilmedia></Socilmedia>
      </div>
    </div>
  );
};

export default Login;
