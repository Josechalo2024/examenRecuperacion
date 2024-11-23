import React, { useState, useEffect } from "react";
import { getAllCountries } from "../services/api";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data.slice(0, 15)); // Mostrar solo los primeros 15
    };
    fetchCountries();
  }, []);

  return (
    <div className="home-container">
      <h1>Lista de Países</h1>
      <div className="cards-container">
        {countries.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
