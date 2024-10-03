/* eslint-disable react/prop-types */
import "./country.css";
const Country = ({ country, handleVisitedCountry }) => {
//   console.log(handleVisitedCountry);
  // const { common } = country.name;
  // const { png } = country.flags;

  return (
    <>
      <section>
        <div className="singleCountry">
          {/* <h3>Country Name:{common}</h3> */}
          {/* <img className="countryImg" src={png} alt="" /> */}
          <br />
          <button onClick={() => handleVisitedCountry(country)} className="btnClass">
            Add to visited
          </button>
        </div>
      </section>
    </>
  );
};

export default Country;
