import banner from "../assets/banner.jpg";

const OfferSection = () => {
  return (
    <div className="m-4 md:m-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={banner}
            alt="banner"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Text and Button Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left p-4">
          <h1 className="font-serif text-xl md:text-2xl font-bold mb-4 animate-bounce">
            Don’t Miss the Offer! Grab it Now
          </h1>
          <button className="border border-transparent rounded bg-orange-600 hover:bg-orange-500 text-white py-2 px-6 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
