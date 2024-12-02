import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const HomePage = () => {
  // State to track the input of food items
  const [data, setData] = useState();
  const [searchMeal, setSearchMeal] = useState(); // to track input

  // API calling
  const apiCalling = async () => {
    const getApi = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    );
    const jsonData = await getApi.json();
    setData(jsonData.meals);
    // console.log(jsonData);
  };
  // function of handleInput
  function handleInput(evt) {
    const input = evt.target.value;
    setSearchMeal(input);
  }

  return (
    <div className="home-page-container">
      <Navbar />
      <div className="main-container">
        <h1>FOOD RECIPE APP</h1>
        <div className="search-container">
          <input
            type="text"
            className="input-box"
            name="searchAbout"
            onChange={handleInput}
            placeholder="Search food....."
          />
          <button onClick={apiCalling}>Search</button>
        </div>
        {!searchMeal && <p className="error">Please enter something</p>}
        {data === null && <p className="error">Data not found</p>}
      </div>

      <div className="card-container">
        {" "}
        <Card details={data} />
      </div>
      {/* main div closing */}
    </div>
  );
};

export default HomePage;
