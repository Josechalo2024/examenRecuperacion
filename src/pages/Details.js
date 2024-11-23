import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryDetails } from "../services/api";
import "../styles/Details.css";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate(); // Hook para redirigir
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const data = await getCountryDetails(name);
      setCountry(data);
    };
    fetchCountryDetails();
  }, [name]);

  return (
    <div className="details-container">
      {country ? (
        <>
          <img src={country.flags.png} alt={country.name.common} />
          <h2>{country.name.common}</h2>
          <p>
            <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
          </p>
          <p>
            <strong>Región:</strong> {country.region}
          </p>
          <p>
            <strong>Población:</strong> {country.population}
          </p>
          <p>
            <strong>Idiomas:</strong>{" "}
            {Object.values(country.languages || {}).join(", ")}
          </p>
          <button className="back-button" onClick={() => navigate("/")}>
            Volver a la página principal
          </button>
        </>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default Details;
