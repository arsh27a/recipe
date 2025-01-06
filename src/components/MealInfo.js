import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const MealInfo = () => {
  const { mealId } = useParams();
  const [searchMealById, setSearchMealById] = useState();
  const [error, setError] = useState(null);

  const apiCallingById = async () => {
    try {
      const getData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const jsonData = await getData.json();
      setSearchMealById(jsonData.meals[0]);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    apiCallingById();
  }, []);
  // Split the instructions into individual steps (by period ".")
  const getInstructionsList = () => {
    if (!searchMealById || !searchMealById.strInstructions) return [];
    return searchMealById.strInstructions
      .split(".")
      .filter((step) => step.trim() !== "") // Remove empty steps
      .map((step, index) => <li key={index}>{step.trim()}.</li>); // Map each step
  };

  return (
    <div className="mealInfo-container">
      <Navbar />

      {!searchMealById ? (
        <p className="error">Loading....</p>
      ) : error ? (
        <p className="error">{error}</p> // Error state
      ) : (
        <div className="mealInfo-inner-container">
          <div className="mealinfo-img">
            <img src={searchMealById.strMealThumb} />
          </div>
          {/* 2nd container */}
          <div className="mealinfo-details">
            <div className="mealinfo-headings">
              <h1>Recipe detail</h1>
              <button>{searchMealById.strMeal}</button>
              <h3>Instruction's</h3>
            </div>
            <ol>
              {getInstructionsList()}{" "}
              {/* Render instructions as an ordered list */}
            </ol>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
