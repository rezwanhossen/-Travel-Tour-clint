import { Link } from "react-router-dom";

const CountriesSection = () => {
  return (
    <div>
      <div>
        <div className="w-3/4 mx-auto text-center ">
          <h1 className="text-3xl font-bold md:text-5xl my-5 ">
            Countries Section
          </h1>
          <p>
            Absolutely! Here are short descriptions for sections of a tourist{" "}
            <br /> blog focused on various countries.
          </p>
        </div>
      </div>
      <div className=" mt-8 w-4/5 mx-auto gap-3  grid grid-cols-1 md:grid-cols-3">
        <Link
          to="/bangladesh"
          className=" rounded-md bg-[url('https://i.ibb.co/Pz9vryf/babaa.jpg')] h-[200px] bg-cover border p-3"
        >
          <div className="flex justify-center mt-16">
            <p className="  text-white text-2xl font-semibold">Bangladesh</p>
          </div>
        </Link>

        <Link
          to="/Thailand"
          className=" rounded-md bg-[url('https://i.ibb.co/g332wrw/pexels-flodahm-1074442.jpg')] h-[200px] bg-cover border p-3"
        >
          <div className="flex justify-center mt-16">
            <p className="  text-white text-2xl font-semibold">Thailand</p>
          </div>
        </Link>

        <Link
          to="/Indonesia"
          className=" rounded-md bg-[url('https://i.ibb.co/y65r8B6/Indonesia.jpg')] h-[200px] bg-cover border p-3"
        >
          <div className="flex justify-center mt-16">
            <p className="  text-white text-2xl font-semibold">Indonesia</p>
          </div>
        </Link>

        <Link
          to="/Malaysia"
          className=" rounded-md bg-[url('https://i.ibb.co/hgnPKnn/pexels-tomas-malik-793526-1660996.jpg')] h-[200px] bg-cover border p-3"
        >
          <div className="flex justify-center mt-16">
            <p className="  text-white text-2xl font-semibold">Malaysia</p>
          </div>
        </Link>

        <Link
          to="/Vietnam"
          className=" rounded-md bg-[url('https://i.ibb.co/F3LWQv8/pexels-indragunawan-398154.jpg')] h-[200px] bg-cover border p-3"
        >
          <div className="flex justify-center mt-16">
            <p className="  text-white text-2xl font-semibold">Vietnam</p>
          </div>
        </Link>

        <Link
          to="/Cambodia"
          className=" rounded-md bg-[url('https://i.ibb.co/b68Fg4H/pexels-tiago-cardoso-1263068-2495575.jpg')] h-[200px] bg-cover border p-3"
        >
          <div className="flex justify-center mt-16">
            <p className="  text-white text-2xl font-semibold"> Cambodia</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CountriesSection;
