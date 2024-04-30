import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { useTypewriter } from "react-simple-typewriter";
// import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Blog = () => {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => {
        setblog(data);
      });
  }, []);

  const [text] = useTypewriter({
    words: ["Blog", "Contents"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="mt-10">
      <div className="w-3/4 mx-auto text-center ">
        <h1 className="text-3xl font-bold md:text-5xl my-5 ">
          Latest from the <span className=" text-rose-600">{text} </span>
        </h1>
        <p>
          It sounds like you're looking for inspiration for a tourist blog.
          Here's a short description for various types of tourist destinations
          that could serve as inspiration for your blog.
        </p>

        <div className="flex justify-center mt-5"></div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
        {blog.map((data) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="25"
            data-aos-duration="2000"
            key={data.id}
          >
            <div className=" border rounded-md p-3  ">
              <img
                className="  h-[200px] w-[100%] rounded mb-1"
                src={data.img}
                alt=""
              />
              <div className=" flex justify-between gap-1 p-2 mb-2">
                <p className=" flex gap-1 items-center">
                  {" "}
                  <AiOutlineLike />
                  {data.likes}{" "}
                </p>
                <p className=" flex gap-1 items-center">
                  <FaComment /> {data.comments} comments{" "}
                </p>
                <p className=" flex gap-1 items-center">
                  <IoIosShareAlt /> {data.shares} shares{" "}
                </p>
              </div>
              <Link
                data-tooltip-id="Click And visit all data"
                data-tooltip-content="Click And visit all data"
                to={`/blogdet/${data.id}`}
                className="text-xl font-bold hover:underline hover:text-green-500"
              >
                {data.title}{" "}
              </Link>
              <Tooltip id="Click And visit all data" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
