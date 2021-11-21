import Navbar from "./components/navbar";
import SearchModifier from "./components/search-modifier";
import LPF from "./components/left-panel-filter";
import SearchListWrapper from "./components/search-list";

function App() {
  return (
    <div className="App">
      <div className="md:sticky md:top-0 md:z-50">
        <Navbar />
        <SearchModifier />
      </div>
      <div className="container flex flex-col md:flex-row justify-center mx-auto">
        <LPF />
        <SearchListWrapper />
      </div>
    </div>
  );
}

export default App;
