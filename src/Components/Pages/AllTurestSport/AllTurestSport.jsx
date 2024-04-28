import { useLoaderData } from "react-router-dom";
import AllturesmCard from "./AllturesmCard";
const AllTurestSport = () => {
  const allturestSport = useLoaderData();
  // console.log(allturestSport);
  return (
    <div>
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
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allturestSport.map((cards) => (
          <AllturesmCard key={cards._id} cards={cards}></AllturesmCard>
        ))}
      </div>
    </div>
  );
};

export default AllTurestSport;
