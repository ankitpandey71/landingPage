import banner from "../assets/banner.jpg";

const OfferSection = () => {
  return (
    <div className="flex m-10">
      <div className="w-1/2">
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <h1>Dont Miss the Offer Grab it now</h1>
        <button>Shop Now </button>
      </div>
    </div>
  );
};

export default OfferSection;
