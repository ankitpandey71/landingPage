import hero from "../assets/hero.png";
import OfferSection from "./OfferSection";
import SlideBox from "./SlideBox";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex justify-between items-center m-8">
          <div className=" w-1/3  flex  flex-col">
            <h6 className="">starting At $999</h6>
            <h1>The Best NoteBook Collection 2024</h1>
            <h4>
              Exclusive offer <span>-10%</span> off this week
            </h4>
            <button>Shop Now</button>
          </div>
          <div>
            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-sm ml-56 h-auto"
            />
          </div>
        </div>
      </div>
      <SlideBox />
      <TrendingProducts />
      <OfferSection />
    </div>
  );
};

export default Home;
