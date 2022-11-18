import React from "react";
import randomBeerImage from "../assets/random-beer.png";
import beersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={beersImage} />
      <Link to="/beers">
        <h1>All beers</h1>
      </Link>
      <p>Lorem ipsum</p>
      <img src={randomBeerImage} />
      <Link to="/random-beer">
        {" "}
        <h1>Random Beer</h1>
      </Link>
      <p>Lorem ipsum</p>

      <img src={newBeerImage} />
      <Link to="/new-beer">
        {" "}
        <h1>New Beer</h1>
      </Link>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default Home;
