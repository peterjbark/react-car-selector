import React from "react";
import Filter from "./components/Filter";
import CarDisplay from "./components/CarDisplay";

// Display component should show attributes selected from Filter component, with option to "X" the attribute and reset it the value to " ".
// Reset button should clear the display and reset query 
// Search button will submit selected attributes to be used in the data fetch, with appropriate terms (model, make, drivetrain, fuel type)

function App() {
  return (
    <div className="app">
      <header className = "header">
        <h1 className = "title">Car Finder</h1>
      </header>
      <main className = "main">
        <Filter/>
      </main>
    </div>
  );
}

export default App;
