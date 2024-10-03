import { useEffect, useState } from "react";
import "../../../../public/bottols.json";
import Bottol from "../bottol/Bottol";
import "./Bottols.css";

const Bottols = () => {
  const [bottles, setBottles] = useState([]);
  const [addBottle, setAddBottle] = useState([]);

  useEffect(() => {
    fetch("bottols.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const addBottleToCart = (addedBottle) => {
    // console.log(addedBottle)
    setAddBottle([...addBottle, addedBottle]);
  };
  return (
    <>
      <h3 className="bottlesHead">My all nice bottles</h3>
      <div className="bottleCart">
        <h2>My all bottle which i bought: {addBottle.length}</h2>
      </div>
      <div className="containerRapper">
        <div className="bottleContainer">
          {bottles.map((bottle, index) => (
            <Bottol
              bottle={bottle}
              key={index}
              addBottleToCart={addBottleToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bottols;
