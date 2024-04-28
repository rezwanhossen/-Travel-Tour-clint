const AllturesmCard = ({ cards }) => {
  const { _id, img, cost, season, trvltime, autimg, Autname, spotName } = cards;
  return (
    <div>
      <div className=" ">
        <div className="  border-2 space-y-3 rounded-md p-5 ">
          <div>
            <img className="w-full h-[250px]" src={img} alt="" />
            <p className=" -mt-14 pr-5 flex justify-end text-white text-3xl font-semibold">
              {cost} $
            </p>
          </div>
          <br />
          <div className="flex justify-between mt-3">
            <p>{season} </p>
            <p>{trvltime} </p>
          </div>
          <div className=" flex gap-1 items-center">
            <img
              className=" w-12 h-12 rounded-full"
              src={autimg || "https://i.ibb.co/ZLvzRqG/user.png"}
              alt=""
            />
            <h3 className="text-xl font-bold">{Autname || "user Undefin"} </h3>
          </div>
          <hr />

          <h3 className="text-2xl font-bold"> {spotName}</h3>
          <button className=" w-full btn btn-outline btn-success">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllturesmCard;
