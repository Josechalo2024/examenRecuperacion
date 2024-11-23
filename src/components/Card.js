import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <Link to={`/details/${country.name.common}`} className="details-button">
        Ver más
      </Link>
    </div>
  );
};

export default Card;
