import { useParams, useLoaderData } from "react-router-dom";
// import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
const Updatetourists = () => {
  const spot = useLoaderData();
  const {
    _id,
    img,
    spotName,
    country,
    location,
    desc,
    cost,
    season,
    trvltime,
    peryear,
  } = spot;

  const handelUpdat = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const spotName = form.spotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const desc = form.desc.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const trvltime = form.trvltime.value;
    const peryear = form.peryear.value;

    const updattouristspot = {
      img,
      spotName,
      country,
      location,
      desc,
      cost,
      season,
      trvltime,
      peryear,
    };
    fetch(`http://localhost:5001/updatsingledata/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updattouristspot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Your data are updated !",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className=" bg-slate-200 rounded-xl w-4/5 mx-auto mt-5 p-5 ">
          <h2 className="text-xl md:text-3xl my-3 text-center border-b-2 pb-3 border-rose-500">
            Update Tourists spot
          </h2>

          <form onSubmit={handelUpdat} className=" space-y-3">
            <div>
              <p className=" text-xl font-semibold">
                Tourists spot photo url :
              </p>
              <input
                className=" input input-bordered w-full"
                type="text"
                name="img"
                placeholder="https://i.ibb.co/qmygyvy/a10logo.png"
                id=""
                defaultValue={img}
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
                  defaultValue={spotName}
                />
              </div>
              <div>
                <p className=" text-xl font-semibold"> Country Name :</p>
                <select
                  className="input input-bordered w-full"
                  id=""
                  name="country"
                  defaultValue={country}
                >
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
                  defaultValue={location}
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
                  defaultValue={desc}
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
                  defaultValue={cost}
                />
              </div>
              <div>
                <p className=" text-xl font-semibold"> seasonality :</p>
                <select
                  className="input input-bordered w-full"
                  id="season"
                  name="season"
                  defaultValue={season}
                >
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                </select>
              </div>
              <div>
                <p className=" text-xl font-semibold"> Travel time:</p>
                <select
                  className="input input-bordered w-full"
                  id=""
                  name="trvltime"
                  defaultValue={trvltime}
                >
                  <option value="summer"> 7 days</option>
                  <option value="autumn">15 days</option>
                  <option value="winter"> 20 days</option>
                  <option value="spring">1 month</option>
                </select>
              </div>

              <div>
                <p className=" text-xl font-semibold">
                  Tota Visitors Per Year :
                </p>
                <input
                  className=" input input-bordered w-full"
                  type="number"
                  name="peryear"
                  placeholder="Tota Visitors Per Year like-1000"
                  id=""
                  defaultValue={peryear}
                />
              </div>
            </div>
            <input
              className=" btn btn-outline btn-success w-full"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatetourists;
