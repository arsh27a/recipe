import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const MealInfo = () => {
  const { mealId } = useParams();
  console.log(mealId);
  const [searchMealById, setSearchMealById] = useState();

  const apiCallingById = async () => {
    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const jsonData = await getData.json();
    console.log(jsonData.meals[0]);
    setSearchMealById(jsonData.meals[0]);
  };
  useEffect(() => {
    apiCallingById();
  }, []);

  return (
    <div className="mealInfo-container">
      <Navbar />

      {!searchMealById ? (
        <p className="error">Data not found</p>
      ) : (
        <div className="mealInfo-inner-container">
          <div className="mealinfo-img">
            <img src={searchMealById.strMealThumb} />
          </div>
          {/* 2nd container */}
          <div>
            <h1>Recipe detail</h1>
            <button>{searchMealById.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{searchMealById.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
