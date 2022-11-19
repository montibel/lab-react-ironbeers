import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  // This will run only once after the initial render
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []); // Run the effect only once, after initial render

  return (
    <div>
      <Navbar />
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id} className="beerId">
          <img className="beerImage" src={beer.image_url} alt="beerImage" />{" "}
          <h3>{beer.name}</h3>
          <h3>{beer.tagline}</h3>
          <p>Created by: {beer.contributed_by}</p>
          <Link to={`/single-beer/${beer._id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
