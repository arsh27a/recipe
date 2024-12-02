import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />

      <div>
        <h1 style={{ textAlign: "center" }}>About us</h1>
      </div>
      <div>
        <b>Welcome to Cookistry, Your Personal Kitchen Companion! </b>
        <p>
          Whether you're a seasoned chef or a kitchen newbie, Cookistry is here
          to make cooking fun, easy, and inspiring. Explore an endless variety
          of recipes, from hearty meals to quick snacks, tailored to suit your
          taste and lifestyle.
        </p>
      </div>
      <div>
        <h1>Why Choose Cookistry?</h1>
        <h3>🍴 Discover Recipes You’ll Love</h3>
        <li>
          Browse thousands of recipes from around the world, categorized by
          cuisine, occasion, and difficulty level.
        </li>
        {/* 2nd point */}
        <h3>🛒 Plan & Shop Effortlessly</h3>
        <p>
          Create smart shopping lists based on your chosen recipes. No more
          forgotten ingredients!
        </p>
        <h3>🥗 Health at Your Fingertips</h3>
        <p>
          Get detailed nutritional information and personalized recommendations
          for your dietary needs.
        </p>
        <h3>👨‍🍳 Cook Like a Pro</h3>{" "}
        <p>
          Follow step-by-step instructions, complete with images and video
          guides.
        </p>
        <h3>📚 Save Your Favorites</h3>{" "}
        <p>
          Organize your favorite recipes into collections for quick access
          anytime.
        </p>
      </div>
      {/* how its work part */}
      <div>
        <h2>How It Works</h2>
        <p>
          1️⃣ Find: Search for recipes based on ingredients, meal types, or
          dietary preferences.
        </p>
        <p>
          2️⃣ Cook: Follow easy instructions with tools like built-in timers and
          portion adjusters.
        </p>
        <p>
          3️⃣ Enjoy: Share your creations with friends and family—or upload your
          own recipes!
        </p>
      </div>
      {/* join community */}
      <div>
        <h2>Join Our Community!</h2>
        <p>
          Be part of a thriving community of food lovers. Share your cooking
          tips, leave reviews, and inspire others with your culinary creations.
        </p>
      </div>
    </div>
  );
};

export default About;
