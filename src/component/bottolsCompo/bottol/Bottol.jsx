/* eslint-disable react/prop-types */
import "./Bottol.css";
const Bottol = ({bottle,addBottleToCart}) => {
    const {img, name, price, seller } =bottle
   
  return (
    <>
      {/* name": "Steel Bottle 600 ML",
      "seller": "Addidas",
      "price": 23,
      "stock": 11,
      "ratings": 5,
      "ratingsCount": 35, */}
      <div className="singleBottleContainer">
        <div className="imgDiv">

        <img className="bottleImg" src={img} alt="" />
        </div>
        <h2>Name:{name}</h2>
        <h5>Price:{price}</h5>
        <p>Seller:{seller}</p>

        <button onClick={()=>addBottleToCart(bottle)} className="addToCartBtn">Add to cart</button>
      </div>
     
    </>
  );
};

export default Bottol;
