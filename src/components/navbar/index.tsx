import "./nav-styles.css";

const Navbar = () => {
  return (
    <header className="bg-white text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="www.sharetrip.net" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://res.cloudinary.com/asif10388/image/upload/v1637438288/sharetrip/Full_iwfxm9.png" alt="logo" className="w-32 object-contain object-center" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5" href="sharetrip.net">
            Flight
          </a>
          <a className="mr-5" href="sharetrip.net">
            Bus
          </a>
          <a className="mr-5" href="sharetrip.net">
            Hotel
          </a>
          <a className="mr-5" href="sharetrip.net">
            Holiday
          </a>
          <a className="mr-5" href="sharetrip.net">
            Visa
          </a>
          <a className="mr-5" href="sharetrip.net">
            Visa Guide
          </a>
          <a className="mr-5" href="sharetrip.net">
            Group Request
          </a>
          <a className="mr-5" href="sharetrip.net">
            Travel Advisory
          </a>
          <a className="mr-5" href="sharetrip.net">
            Promotions
          </a>
          <a className="mr-5" href="sharetrip.net">
            Blog
          </a>
        </nav>
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <img src="https://res.cloudinary.com/asif10388/image/upload/v1637438949/sharetrip/spin-wheel-mono_ic9238.svg" alt="spin" className="mr-2" />
          Spin to Win
        </button>
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <img src="https://res.cloudinary.com/asif10388/image/upload/v1637439058/sharetrip/Profile_p2vcsx.svg" alt="spin" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
