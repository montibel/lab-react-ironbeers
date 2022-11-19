import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const [beer, setBeers] = useState({});
  const { id } = useParams();
  // This will run only once after the initial render
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, [id]);

  return (
    <div>
      <img src={beer.image_url} alt="singlebeer" />
      <h3>{beer.name}</h3>

      <p>
        <b>{beer.tagline}</b>
      </p>
      <p>{beer.description}</p>
      <p>
        <b>First brewed:</b> {beer.first_brewed}
      </p>
      <p>
        <b>Attenuation level:</b> {beer.attenuation_level}
      </p>

      <p>
        <b>Contributed by {beer.contributed_by}</b>
      </p>
    </div>
  );
}

export default SingleBeer;
