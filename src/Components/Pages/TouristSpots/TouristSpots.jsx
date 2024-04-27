import { Link } from "react-router-dom";

const TouristSpots = () => {
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

      <div className=" mt-8">
        <div className=" w-96 border-2 space-y-3 rounded-md p-5 ">
          <div>
            <img
              className="w-full h-[250px]"
              src="https://i.ibb.co/fpS4K8T/pexels-rachel-claire-4577565.jpg"
              alt=""
            />
            <p className=" -mt-14 pr-5 flex justify-end text-white text-3xl font-semibold">
              200000 $
            </p>
          </div>
          <br />
          <div className="flex justify-between mt-3">
            <p>seasonality</p>
            <p>travel_time</p>
          </div>
          <p className=" flex justify-end">totaVisitorsPerYear</p>
          <hr />

          <h3 className="text-2xl font-bold"> tourists_spot_name</h3>
          <button className=" w-full btn btn-outline btn-success">
            View Details
          </button>
        </div>
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
