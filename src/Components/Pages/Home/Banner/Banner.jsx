import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Southeast ", "Asia"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-[80vh]"
        >
          <SwiperSlide className=" bg-[url('https://i.ibb.co/2sMtDgF/pexels-conojeghuo-211049.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="flex items-center h-full justigfy-center ">
              <div className=" w-3/5 mx-auto text-white text-center">
                <h1 className="  text-3xl lg:text-5xl font-bold">
                  Welcome to
                  <span className=" text-rose-600">{text}</span> Adventures!
                </h1>
                <p>
                  Embark on an unforgettable journey with us and discover the
                  wonders of Southeast Asia. From pristine beaches to ancient
                  temples, immerse yourself in vibrant cultures and breathtaking
                  landscapes. Let us be your guide to extraordinary experiences
                  and lifelong memories.
                </p>
                <div>
                  <Link className="mt-5 btn btn-outline  btn-success">
                    Get Starte <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[url('https://i.ibb.co/Htxzz3q/pexels-eberhardgross-4406185.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="flex items-center h-full justify-center ">
              <div className=" w-3/5 mx-auto text-white text-center">
                <h1 className="text-3xl lg:text-5xl font-bold">
                  Discover <span className=" text-rose-700">{text} </span>{" "}
                  Hidden Treasures!
                </h1>
                <p>
                  Uncover the secrets of Southeast Asia with our expertly
                  crafted tours. Dive into the turquoise waters of hidden
                  islands, wander through ancient ruins, and taste the flavors
                  of exotic cuisines. Get ready for an adventure like no other!
                </p>
                <div>
                  <Link className="mt-5 btn btn-outline  btn-success">
                    Get Starte <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[url('https://i.ibb.co/fpS4K8T/pexels-rachel-claire-4577565.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="flex items-center h-full justify-center ">
              <div className=" w-3/5 mx-auto text-white text-center">
                <h1 className=" text-3xl lg:text-5xl font-bold">
                  Experience the Magic of{" "}
                  <span className=" text-rose-700"> {text}</span>
                </h1>
                <p>
                  Step into a world of enchantment and wonder with Southeast
                  Asia Adventures. Lose yourself in lush jungles, vibrant
                  cities, and tranquil villages. Join us as we unlock the
                  mysteries and beauty of this captivating region, one
                  unforgettable moment at a time.
                </p>
                <div>
                  <Link className="mt-5 btn btn-outline  btn-success">
                    Get Starte <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
