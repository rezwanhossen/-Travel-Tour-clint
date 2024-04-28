import { useLoaderData } from "react-router-dom";
const VewditalTspot = () => {
  const alldata = useLoaderData();
  const {
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
  } = alldata;
  return (
    <div className=" md:w-1/2 mx-auto">
      <div className="  border-2 rounded-md p-5 ">
        <div>
          <img className="w-full h-[250px]" src={img} alt="" />
          <p className=" -mt-14 pr-5 flex justify-end text-white text-3xl font-semibold">
            {cost} $
          </p>
        </div>
        <br />
        <div className="flex justify-between mt-2">
          <p>{season} </p>
          <p> totaVisitorsPerYear {peryear}</p>
          <p>{trvltime} </p>
        </div>
        <div className=" flex gap-1 items-center mb-2">
          <img
            className=" w-12 h-12 rounded-full"
            src={autimg || "https://i.ibb.co/ZLvzRqG/user.png"}
            alt=""
          />
          <div>
            {" "}
            <h3 className="text-xl font-bold">{Autname || "user Undefin"} </h3>
            <p className=" text-sm">{email}</p>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="text-3xl font-bold">{spotName} </h1>
          <div className=" flex gap-2 mb-3">
            <p>{location},</p>
            <p>{country} </p>
          </div>
          <hr />
          <p>{desc} </p>
        </div>
      </div>
    </div>
  );
};

export default VewditalTspot;
