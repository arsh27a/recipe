import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ details }) => {
  return (
    <div className="card-container">
      <div className="card-inner-container">
        {!details
          ? " "
          : details.map((searchedMeal) => (
              <>
                <span key={searchedMeal.idMeal} className="meal-container">
                  <img src={searchedMeal.strMealThumb} />
                  <p style={{ paddingTop: "1rem" }}>{searchedMeal.strMeal}</p>
                  <NavLink to={`/${searchedMeal.idMeal}`}>
                    <button>RECIPE</button>
                  </NavLink>
                </span>
              </>
            ))}
      </div>
      {/* card container div is closing here */}
    </div>
  );
};

export default Card;
