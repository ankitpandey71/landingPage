const SlideBox = () => {
  return (
    <div className="bg-gray-300 py-6">
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Free Delivery
          </h1>
          <h4 className="text-gray-600">Orders from all items</h4>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Return & Refund
          </h1>
          <h4 className="text-gray-600">Money Back Guarantee</h4>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Member Discount
          </h1>
          <h4 className="text-gray-600">On order over $999</h4>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Support 24/7
          </h1>
          <h4 className="text-gray-600">Contact us 24 hours a day</h4>
        </div>
      </div>
    </div>
  );
};

export default SlideBox;
