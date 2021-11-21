import "./sbp-styles.css";

const SBP = () => {
  return (
    <div className="container p-5 mx-auto">
      <div className="flex flex-wrap -m-4 border-b-2 border-gray-200">
        <div className="xl:w-1/4 md:w-1/2">
          <div className="p-3 flex justify-center items-center">
            <img className="mr-2" src="https://res.cloudinary.com/asif10388/image/upload/v1637445953/sharetrip/Icon_zqnl34.svg" alt="" />
            <h2 className="text-lg text-gray-900 font-medium title-font">Earliest Buses</h2>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 panel-item">
          <div className="p-3 flex justify-center items-center">
            <img className="mr-2" src="https://res.cloudinary.com/asif10388/image/upload/v1637445954/sharetrip/Icon-1_ibhhkh.svg" alt="" />
            <h2 className="text-lg font-medium title-font">Cheapest Buses</h2>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2">
          <div className="p-3 flex justify-center items-center">
            <img className="mr-2" src="https://res.cloudinary.com/asif10388/image/upload/v1637445954/sharetrip/Icon-3_kdocoh.svg" alt="" />
            <h2 className="text-lg text-gray-900 font-medium title-font">Available Seats</h2>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2">
          <div className="p-3 flex justify-center items-center">
            <img className="mr-2" src="https://res.cloudinary.com/asif10388/image/upload/v1637445954/sharetrip/Icon-3_kdocoh.svg" alt="" />
            <h2 className="text-lg text-gray-900 font-medium title-font">Fastest Trips</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBP;
