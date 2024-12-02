import "./App.css";
import { HomePage, MealInfo, About, SignUp } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/:mealId" element={<MealInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
