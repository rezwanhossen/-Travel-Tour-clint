import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Vietnam = () => {
  const { loding } = useAuth();
  const [bcard, setbcard] = useState([]);
  useEffect(() => {
    fetch("https://assigment10-sarver-side.vercel.app/countrys/Vietnam")
      .then((res) => res.json())
      .then((data) => {
        setbcard(data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="hero min-h-screen  bg-[url('https://i.ibb.co/PC5rtFb/Asian-woman-wearing-Vietnam-culture-traditional-at-Trang-An-Vietnam-1.jpg')] bg-cover h-[100vh]">
          <div className="hero-content text-center">
            <div className="max-w-md text-white">
              <h1 className="text-5xl font-bold">Vietnam</h1>
              <p className="py-6 text-xl">
                Welcome to Vietnam, Nestled in the heart of Southeast Asia lies
                a land of vibrant culture, rich history, and unparalleled
                natural beauty: Vietnam. From bustling metropolises to serene
                islands, Indonesia offers a diverse array of experiences that
                captivate the senses and leave a lasting impression on all who
                visit.
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
                src="https://i.ibb.co/z64pNQC/images-3.jpg"
                alt=""
              />
            </div>
            <div className=" flex-1">
              <h1 className="text-3xl font-bold my-5"> Pristine Beaches </h1>
              <p>
                Vietnam boasts some of the most beautiful beaches in the world,
                including the famous Maya Bay on Phi Phi Islands, the powdery
                sands of Railay Beach, and the lively shores of Patong Beach in
                Phuket. These beaches offer opportunities for sunbathing,
                swimming, snorkeling, and water sports against a backdrop of
                turquoise waters and towering limestone cliffs.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="75"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
            className=" md:flex gap-4 border rounded p-5"
          >
            <div className=" flex-1">
              <h1 className="text-3xl font-bold my-5">Tropical Islands </h1>
              <p>
                Beyond the mainland, Thailand is home to numerous idyllic
                islands with lush jungles, clear waters, and vibrant coral
                reefs. From the party atmosphere of Koh Phangan to the
                tranquility of Koh Tao and the luxury resorts of Koh Samui, each
                island offers a unique experience for travelers seeking
                relaxation and adventure.
              </p>
            </div>
            <div className=" flex-1">
              <img
                className=" w-full h-[300px]"
                src="https://i.ibb.co/PC5rtFb/Asian-woman-wearing-Vietnam-culture-traditional-at-Trang-An-Vietnam-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="3000"
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
                  src="https://i.ibb.co/wSp5xBk/images-2.jpg"
                  alt=""
                />
                <img
                  className=" w-full h-[150px]"
                  src="https://i.ibb.co/6ZLMLdR/images-1.jpg"
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
                <b>Rivers and Waterfalls:</b> Thailand's network of rivers and
                waterfalls provides refreshing escapes from the heat and
                opportunities for outdoor adventures. Erawan Falls in
                Kanchanaburi, with its seven-tiered cascades and emerald pools,
              </li>
              <li>
                <b>Diverse National Parks:</b> Thailand's network of rivers and
                waterfalls provides refreshing escapes from the heat and
                opportunities for outdoor adventures. Erawan Falls in
                Kanchanaburi, with its seven-tiered cascades and emerald pools,
              </li>
              <li>
                <b>RCultural Immersions:</b> Thailand's network of rivers and
                waterfalls provides refreshing escapes from the heat and
                opportunities for outdoor adventures. Erawan Falls in
                Kanchanaburi, with its seven-tiered cascades and emerald pools,
              </li>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vietnam;
