import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Profil = () => {
  const naviget = useNavigate();

  const location = useLocation();

  const forms = location.state || "/";
  const { user, updatprofil } = useAuth();
  const [suc, setsuc] = useState("");
  const handelupdt = (e) => {
    e.preventDefault();
    setsuc("");
    const form = e.target;
    const fulname = form.fullname.value;
    const img = form.img.value;
    updatprofil(fulname, img)
      .then((result) => {
        setsuc("update Succesfully ! & reloted this page");
        naviget(forms);
      })
      .catch((error) => {
        setsuc(error.message);
      });
  };
  return (
    <div>
      <div className=" md:w-1/2 mx-auto p-4 mt-4 border  rounded-md">
        <div className="flex gap-3 border p-4">
          <img className=" w-16 h-18" src={user?.photoURL} alt="" />
          <div>
            <h5 className=" text-2xl font-bold my-3">{user?.displayName} </h5>
            <p> {user?.email}</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center my-4">Updat profil</h1>
          <form onSubmit={handelupdt}>
            <div>
              <input
                type="text"
                name="fullname"
                className=" input input-bordered w-full"
                placeholder=" change your name"
                id=""
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="img"
                className=" input input-bordered w-full"
                placeholder="change your photo url"
                id=""
              />
            </div>
            <br />
            <input
              type="submit"
              className=" w-full btn btn-outline btn-success"
              value="Update Profil"
            />
          </form>
          {suc && <p className=" text-green-600">{suc} </p>}
        </div>
      </div>
    </div>
  );
};

export default Profil;
