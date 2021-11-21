import "./modifier-styles.css";

const SearchModifier = () => {
  return (
    <div className="modifier-body text-white">
      <div className="container mx-auto flex flex-wrap py-6 flex-col justify-between md:flex-row items-center">
        <div className="px-10 py-2 flex items-center mb-4 md:mb-0 onward rounded">
          <div className="mr-4">
            <img src="https://res.cloudinary.com/asif10388/image/upload/v1637439834/sharetrip/bus-icon-260nw-454565515_1_Traced_pq28af.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <p>Onward Journey</p>
            <h2>Dhaka-Chottogram</h2>
            <p>22 June, 2021 (Tuesday)</p>
          </div>
        </div>
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <img src="https://res.cloudinary.com/asif10388/image/upload/v1637440479/sharetrip/Group_14853_dqatnh.svg" alt="" />
        </button>
        <div className="px-8 py-2 flex items-center mb-4 md:mb-0 onward rounded opacity-70">
          <div className="mr-4">
            <img src="https://res.cloudinary.com/asif10388/image/upload/v1637440570/sharetrip/bus-icon-260nw-454565515_1_Traced_ejselw.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <p>Return Journey</p>
            <h2>Chottogram - Dhaka</h2>
            <p>24 June, 2021 (Thursday)</p>
          </div>
        </div>
        <button className="modifiier-button">Modify Search</button>
      </div>
    </div>
  );
};

export default SearchModifier;
