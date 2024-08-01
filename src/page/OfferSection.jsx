import banner from "../assets/banner.jpg";

const OfferSection = () => {
  return (
    <div className="flex m-10">
      <div className="w-1/2">
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <div className="w-1/2 flex justify-center flex-col items-center">
        <h1 className="font-serif text-2xl animate-bounce">
          Dont Miss the Offer Grab it now
        </h1>
        <button className="border rounded bg-orange-600 hover:bg-orange-300 p-4">
          Shop Now{" "}
        </button>
      </div>
    </div>
  );
};

export default OfferSection;
