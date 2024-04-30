import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Contact from "../Home/Contact/Contact";
// import useAuth from "../../../Hook/useAuth";
import AllturesmCard from "./AllturesmCard";
import { Helmet } from "react-helmet-async";

const AllTurestSport = () => {
  // const allturestSport = useLoaderData();
  const [allturestSport, setalltu] = useState([]);
  useEffect(() => {
    fetch("https://assigment10-sarver-side.vercel.app/tourspot")
      .then((res) => res.json())
      .then((data) => {
        setalltu(data);
      });
  }, []);
  const handelsort = (filter) => {
    if (filter === "ascending") {
      const data = [...allturestSport];
      const res = data.sort((a, b) => a.cost - b.cost);
      setalltu(res);
    } else if (filter === "descending") {
      const data = [...allturestSport];
      const res = data.sort((a, b) => b.cost - a.cost);
      setalltu(res);
    }
  };

  // console.log(allturestSport);
  return (
    <div>
      <Helmet>
        <title>All turest spots</title>
      </Helmet>
      <div className="hero h-[70vh] bg-[url('https://i.ibb.co/w6yzGNb/bgtravel.jpg')] bg-cover bg-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6 text-xl">
              We understand that every traveler is unique, which is why we offer
              customizable options to tailor your experience based on your
              interests, budget, and preferences. Whether you want to add extra
              activities, upgrade accommodations, or extend your stay, our team
              will work with you to create your dream itinerary.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center my-5">
          All Tourist Spots
        </h1>
      </div>
      <div className="flex justify-center ">
        <details className="dropdown">
          <summary className="m-1 btn-success btn-outline btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button
                onClick={() => handelsort("ascending")}
                className=" btn btn-outline"
              >
                ascending
              </button>
            </li>
            <li>
              <button
                onClick={() => handelsort("descending")}
                className=" btn btn-outline"
              >
                descending
              </button>
            </li>
          </ul>
        </details>
      </div>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allturestSport.map((cards) => (
          <AllturesmCard key={cards._id} cards={cards}></AllturesmCard>
        ))}
      </div>
      <div className="mt-5">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default AllTurestSport;
