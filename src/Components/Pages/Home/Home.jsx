import Blog from "../Blog/Blog";
import CountriesSection from "../CountriesSection/CountriesSection";
import TouristSpots from "../TouristSpots/TouristSpots";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <TouristSpots></TouristSpots>
      <CountriesSection></CountriesSection>
      <Blog></Blog>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
