import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBeers from "./pages/beers";
import RandomBeer from "./pages/random-beer";
import NewBeer from "./pages/new-beer";
import SingleBeer from "./pages/single-beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/single-beer/:id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
