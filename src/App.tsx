import React from "react";
import "./App.css";

const givenDivision = [
  {
    name: "Rockets",
    points: 64,
  },
  {
    name: "Cardinals",
    points: 77,
  },
  {
    name: "Bruisers",
    points: 51,
  },
  {
    name: "Renegades",
    points: 37,
  },
  {
    name: "Porpoises",
    points: 52,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>iWarranty Coding Challenge</h1>
        <hr />
        <p>Results go here</p>
      </header>
    </div>
  );
}

export default App;
