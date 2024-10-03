import { useState } from "react";
import "./Bottols.css";
import { useEffect } from "react";
import "../../../public/bottols.json";
import Bottol from "../bottol/Bottol";

const Bottols = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottols.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <>
      <h3 className="bottlesHead">My all nice bottles</h3>
     <div className="containerRapper">
     <div className="bottleContainer">
        {bottles.map((bottle, index) => (
          <Bottol bottle={bottle} key={index} />
        ))}
      </div>
     </div>
    </>
  );
};

export default Bottols;
