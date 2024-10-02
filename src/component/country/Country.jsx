/* eslint-disable react/prop-types */
import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { common } = country.name;
  const { png } = country.flags;
  return (
    <>
      <section>
        <div className="singleCountry">
          <h3>Country Name:{common}</h3>
          <img className="countryImg" src={png} alt="" />
          <br />
          <button className="btnClass"
            style={{
              
            }}
          >
            Add to visited
          </button>
        </div>
      </section>
    </>
  );
};

export default Country;
