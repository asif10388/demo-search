import SBO from "../sort-by-operator";
import SBP from "../sort-by-panel";
import TicketWrapper from "./ticket-component";

const SearchListWrapper = () => {
  return (
    <div className="overflow-hidden">
      <div className=" p-4">
        <h1 className="font-bold text-xl">48 Available Buses</h1>
      </div>
      <SBO />
      <SBP />
      <TicketWrapper />
    </div>
  );
};

export default SearchListWrapper;
