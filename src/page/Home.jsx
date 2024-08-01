import hero from "../assets/hero.png";
import Footer from "./Footer";
import OfferSection from "./OfferSection";
import SlideBox from "./SlideBox";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100 p-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-8">
          <h6 className="text-gray-600 text-sm mb-2">Starting At $999</h6>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            The Best Notebook Collection 2024
          </h1>
          <h4 className="text-lg text-gray-700 mb-4">
            Exclusive offer <span className="text-red-500">-10%</span> off this
            week
          </h4>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={hero} alt="Hero" className="w-full max-w-md h-auto" />
        </div>
      </div>

      {/* Other Sections */}
      <SlideBox />
      <TrendingProducts />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Home;
