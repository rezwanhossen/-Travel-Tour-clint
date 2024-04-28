import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Blogdet = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const idint = parseFloat(id);
  const datas = data.find((data) => data.id === idint);
  const { img, title, likes, comments, shares, rating, description } = datas;

  return (
    <div className=" mt-6 md:w-4/6 mx-auto border rounded-xl p-5">
      <img className="  h-[400px] w-[100%] rounded mb-1" src={img} alt="" />
      <div className=" flex justify-between gap-1 p-2 mb-2">
        <p className=" flex gap-1 items-center">
          {" "}
          <AiOutlineLike />
          {likes}{" "}
        </p>
        <p className=" flex gap-1 items-center">
          <FaComment /> {comments} comments{" "}
        </p>
        <p className=" flex gap-1 items-center">
          <IoIosShareAlt /> {shares} shares{" "}
        </p>
        <p className=" flex gap-1 items-center">
          {" "}
          <FaRegStar />
          {rating}{" "}
        </p>
      </div>
      <h1 className="text-2xl font-bold mb-3">{title} </h1>
      <p>{description} </p>
    </div>
  );
};

export default Blogdet;
