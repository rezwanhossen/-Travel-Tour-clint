import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import useAuth from "../../../Hook/useAuth";
const Register = () => {
  const [showpass, setshowpass] = useState(false);
  const [passvalid, setpassvalid] = useState("");

  const { creatUser, updatprofil } = useAuth();
  const naviget = useNavigate();
  const location = useLocation();

  const form = location.state || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, fullname, img } = data;

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
    creatUser(email, password, fullname, img).then(() => {
      updatprofil(fullname, img).then(() => {
        naviget(form);
      });
    });

    console.log(email, password, fullname, img);
  };
  return (
    <div>
      <div data-aos="zoom-in-up" data-aos-delay="200">
        <div className="w-full md:w-2/5 mx-auto border rounded shadow-md bg-gray-100 p-5 space-y-4">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full border rounded px-2 py-3 mb-3"
              type="text"
              placeholder="Full name"
              name=""
              id=""
              {...register("fullname")}
              required
            />
            <br />
            <input
              className="w-full border rounded px-2 py-3 mb-3"
              type="text"
              placeholder=" Photo url"
              name=""
              {...register("img")}
              id=""
            />
            <br />
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
                className="w-full border rounded  px-2 py-3"
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
              value="register"
            />
          </form>

          <p className="text-center">
            Alrady have an Account ?
            <Link to="/login" className=" font-bold text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
