import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AddTourists = () => {
  const { user } = useAuth();

  const handeladdturist = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const spotName = form.spotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const desc = form.desc.value;
    const cost = parseInt(form.cost.value);
    const season = form.season.value;
    const trvltime = form.trvltime.value;
    const peryear = form.peryear.value;
    const Autname = user?.displayName;
    const email = user?.email;
    const autimg = user?.photoURL;
    const addtouristspot = {
      img,
      spotName,
      country,
      location,
      desc,
      cost,
      season,
      trvltime,
      peryear,
      autimg,
      Autname,
      email,
    };

    //sent data in data base
    fetch("https://assigment10-sarver-side.vercel.app/tourspot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addtouristspot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Your turesm Spot is added !",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add tourest spot</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        data-aos-delay="25"
        data-aos-duration="2000"
        className=" bg-slate-200 rounded-xl w-4/5 mx-auto mt-5 p-5 "
      >
        <h2 className="text-xl md:text-3xl my-3 text-center border-b-2 pb-3 border-rose-500">
          Add Tourists spot
        </h2>

        <form onSubmit={handeladdturist} className=" space-y-3">
          <div>
            <p className=" text-xl font-semibold"> Tourists spot photo url :</p>
            <input
              className=" input input-bordered w-full"
              type="text"
              name="img"
              placeholder="https://i.ibb.co/qmygyvy/a10logo.png"
              id=""
            />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <p className=" text-xl font-semibold"> Tourists spot name :</p>
              <input
                className=" input input-bordered w-full"
                type="text"
                name="spotName"
                placeholder="Enter tourists spot name"
                id=""
              />
            </div>
            <div>
              <p className=" text-xl font-semibold"> Country Name :</p>
              <select className="select w-full" id="country" name="country">
                <option value="">Select countey</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
            <div>
              <p className=" text-xl font-semibold"> Location :</p>
              <input
                className=" input input-bordered w-full"
                type="text"
                name="location"
                placeholder="Enter location"
                id=""
              />
            </div>
            <div>
              <p className=" text-xl font-semibold">Description :</p>
              <input
                className=" input input-bordered w-full"
                type="text"
                name="desc"
                placeholder="short description"
                id=""
              />
            </div>
            <div>
              <p className=" text-xl font-semibold">Average cost :</p>
              <input
                className=" input input-bordered w-full"
                type="number"
                name="cost"
                placeholder="average cost like-2000"
                id=""
              />
            </div>
            <div>
              <p className=" text-xl font-semibold"> seasonality :</p>
              <select className="select  w-full" id="season" name="season">
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
              </select>
            </div>
            <div>
              <p className=" text-xl font-semibold"> Travel time:</p>
              <select className="select w-full" id="" name="trvltime">
                <option value="7 days"> 7 days</option>
                <option value="15 days">15 days</option>
                <option value="20 days"> 20 days</option>
                <option value="1 month">1 month</option>
              </select>
            </div>

            <div>
              <p className=" text-xl font-semibold">Tota Visitors Per Year :</p>
              <input
                className=" input input-bordered w-full"
                type="number"
                name="peryear"
                placeholder="Tota Visitors Per Year like-1000"
                id=""
              />
            </div>
          </div>
          <input
            className=" btn btn-outline btn-success w-full"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTourists;
