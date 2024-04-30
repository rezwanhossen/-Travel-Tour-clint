import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Bungladesh = () => {
  const { loding } = useAuth();
  const [bcard, setbcard] = useState([]);
  useEffect(() => {
    fetch("https://assigment10-sarver-side.vercel.app/countrys/Bangladesh")
      .then((res) => res.json())
      .then((data) => {
        setbcard(data);
      });
  }, []);

  return (
    <div>
      <div className="hero min-h-screen  bg-[url('https://i.ibb.co/KDxP5fY/banglades.jpg')] bg-cover h-[100vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 data-aos="fade-left" className="text-5xl font-bold">
              Bangladesh
            </h1>
            <p data-aos="fade-up-right" className="py-6 text-xl">
              Welcome to Bangladesh, a land where nature unfolds its mesmerizing
              beauty at every turn. From the tranquil waters of the Sundarbans
              to the misty hills of Bandarban, this country is a treasure trove
              of natural wonders.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {bcard.map((data) => (
          <div key={data._id}>
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
                  className=" w-10 h-10 rounded-full"
                  src={data.autimg || "https://i.ibb.co/ZLvzRqG/user.png"}
                  alt=""
                />
                <h3 className="text-xl font-bold">
                  {data.Autname || "user Undefin"}{" "}
                </h3>
              </div>
              <hr />

              <h3 className="text-2xl font-bold"> {data.spotName}</h3>

              <Link
                to={`/vewditTureSpot/${data._id}`}
                className=" w-full btn btn-outline btn-success"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <section className=" mt-10 space-y-4">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className=" md:flex gap-4 border rounded p-5"
        >
          <div className=" flex-1">
            <img
              className=" w-full h-[300px]"
              src="https://i.ibb.co/wQzHzzZ/slyet.jpg"
              alt=""
            />
          </div>
          <div className=" flex-1">
            <h1 className="text-3xl font-bold my-5"> Sylhet </h1>
            <p>
              Venture inland to Sylhet, where emerald tea gardens carpet the
              rolling hills, painting a picture-perfect landscape that soothes
              the soul. Hidden within this verdant paradise lies Ratargul Swamp
              Forest, a mystical realm where the waters mirror the lush foliage
              above, creating an ethereal ambiance that transports visitors to
              another world.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className=" md:flex gap-4 border rounded p-5"
        >
          <div className=" flex-1">
            <h1 className="text-3xl font-bold my-5">Cox's Bazar </h1>
            <p>
              Cox's Bazar beckons with its endless stretch of golden sands,
              kissed by the azure waters of the Bay of Bengal. As the longest
              natural sea beach in the world, it offers a sanctuary for
              sun-seekers and beach lovers alike, where the rhythmic sound of
              crashing waves lulls visitors into a state of blissful relaxation.
            </p>
          </div>
          <div className=" flex-1">
            <img
              className=" w-full h-[300px]"
              src="https://i.ibb.co/Tr7pj9X/Cox-s-Bazar.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className=" md:flex gap-4 border rounded p-5"
        >
          <div className=" flex-1">
            <div className=" grid grid-cols-2">
              <img
                className=" w-full h-[150px] "
                src="https://i.ibb.co/Tr7pj9X/Cox-s-Bazar.jpg"
                alt=""
              />
              <img
                className=" w-full h-[150px] "
                src="https://i.ibb.co/wQzHzzZ/slyet.jpg"
                alt=""
              />
              <img
                className=" w-full h-[150px]"
                src="https://i.ibb.co/QczVJ90/fffff.jpg"
                alt=""
              />
              <img
                className=" w-full h-[150px]"
                src="https://i.ibb.co/bbYYwpW/gggg.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" flex-1">
            <li>
              <b>Bandarban:</b> This southeastern district is characterized by
              its rugged terrain, lush green hills, and tribal culture. The
              Nilgiri Hills and the Boga Lake are popular attractions offering
              breathtaking views.
            </li>
            <li>
              <b>Saint Martin's Island: </b> This southeastern district is
              characterized by its rugged terrain, lush green hills, and tribal
              culture. The Nilgiri Hills and the Boga Lake are popular
              attractions offering breathtaking views.
            </li>
            <li>
              <b>Rangamati:</b> This southeastern district is characterized by
              its rugged terrain, lush green hills, and tribal culture. The
              Nilgiri Hills and the Boga Lake are popular attractions offering
              breathtaking views.
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bungladesh;
