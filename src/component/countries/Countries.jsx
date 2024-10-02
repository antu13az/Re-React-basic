/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./countries.css";
import Country from "../country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <>
      <h1 className="countryHeading">All Countries in the world</h1>
      <div>
        <h3>Country what I visited</h3>
        {
            visitedCountries.map((country=>(
                <li>{country.name.common}</li>
            )))
        }
        <ul></ul>
      </div>
      <div className="countriesLayout">
        {countries.map((country, index) => (
          <Country
            country={country}
            key={index}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
