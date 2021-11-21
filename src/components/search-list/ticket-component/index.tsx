import "./ticket-styles.css";

const TicketWrapper = () => {
  return (
    <div className="container p-5 mx-auto flex flex-col md:flex-row w-full ticket-container w-full">
      <div className="flex justify-between w-full md:w-3/4 overflow-x-auto">
        <div className="column 1st-column w-full">
          <h2 className="font-bold text-xl mb-5">AC</h2>
          <p className="text-gray-900 font-medium">From</p>
          <h2 className="text-xl">
            DHAKA <span className="font-bold"> 11:30 PM</span>
          </h2>
          <p className="text-gray-900 font-medium text-md">Kolabagan Counter</p>
          <p className="text-gray-700 opacity-70">22 June 2021</p>
        </div>
        <div className="column 2nd-column flex flex-col md:items-center w-full">
          <h2 className="font-bold text-xl">Hanif Enterprize</h2>
          <p className="text-gray-700 opacity-70 font-medium mb-5 text-sm">31-DHK-CTG(D)</p>
          <div className="flex mb-2">
            <img src="https://res.cloudinary.com/asif10388/image/upload/v1637490340/sharetrip/Vector_3_vyr6nj.svg" alt="" className="mr-2" />
            <img src="https://res.cloudinary.com/asif10388/image/upload/v1637447899/sharetrip/bus-icon-260nw-454565515_1_Traced_obtine.svg" alt="" className="mr-2" />
            <img src="https://res.cloudinary.com/asif10388/image/upload/v1637490340/sharetrip/Vector_3-1_vsgyba.svg" alt="" />
          </div>
          <p className="seats">16 Seats available</p>
          <p className="text-gray-700 opacity-70">6h 00m</p>
        </div>
        <div className="column 3rd-column w-full">
          <div className="flex md:justify-end mb-5">
            <img src="https://res.cloudinary.com/asif10388/image/upload/v1637448012/sharetrip/Tripcoin_xtenwx.svg" alt="" />
            <h2 className="font-bold text-xl ml-1">55</h2>
          </div>
          <p>To</p>
          <h2 className="text-xl md:whitespace-nowrap">
            Chottogram <span className="font-bold">05:30 AM </span>
          </h2>
          <p className="font-medium text-gray-700 text-md">Dampara Counter</p>
          <p className="text-gray-700 opacity-70">23 June 2021</p>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end md:justify-center column column-4 w-full md:w-1/4">
        <p className="subtext">Per Person</p>
        <h2>BDT 750</h2>
        <p className="mb-4">BDT 775</p>
        <button>View seats</button>
      </div>
    </div>
  );
};

export default TicketWrapper;
