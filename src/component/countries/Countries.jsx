import { useEffect, useState } from "react";
import "./countries.css";
import Country from "../country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <h1 className="countryHeading">All Countries in the world</h1>
      <div>
        <h3>Country what I visited</h3>
        <ul>
            
        </ul>
      </div>
      <div className="countriesLayout">
        {countries.map((country, index) => (
          <Country country={country} key={index} />
        ))}
      </div>
    </>
  );
};

export default Countries;
