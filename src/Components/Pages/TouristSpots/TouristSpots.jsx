import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TouristSpots = () => {
  const [spot, setspot] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/tourspot")
      .then((res) => res.json())
      .then((data) => {
        setspot(data);
      });
  }, []);
  return (
    <div className="mt-10">
      <div className="w-3/4 mx-auto text-center ">
        <h1 className="text-2xl md:text-5xl font-bold mb-3">Tourist Spots</h1>
        <p>
          Ah, I see! You're referring to tourist spots or tourist attractions.
          These are popular destinations that people <br /> visit for leisure,
          relaxation, or exploration.{" "}
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {spot.slice(0, 6).map((data) => (
          <div key={data._id}>
            <div className=" ">
              <div className="  border-2 space-y-3 rounded-md p-5 ">
                <div>
                  <img className="w-full h-[250px]" src={data.img} alt="" />
                  <p className=" -mt-14 pr-5 flex justify-end text-white text-3xl font-semibold">
                    {data.cost} $
                  </p>
                </div>
                <br />
                <div className="flex justify-between mt-3">
                  <p>{data.season} </p>
                  <p>{data.trvltime} </p>
                </div>
                <div className=" flex gap-1 items-center">
                  <img
                    className=" w-12 h-12 rounded-full"
                    src={data.autimg || "https://i.ibb.co/ZLvzRqG/user.png"}
                    alt=""
                  />
                  <h3 className="text-xl font-bold">
                    {data.Autname || "user Undefin"}{" "}
                  </h3>
                </div>
                <hr />

                <h3 className="text-2xl font-bold"> {data.spotName}</h3>
                <button className=" w-full btn btn-outline btn-success">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center mt-5">
        <Link to="/allturestsport" className="btn btn-outline btn-success">
          View Details page
        </Link>
      </div>
    </div>
  );
};

export default TouristSpots;
