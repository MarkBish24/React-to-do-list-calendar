import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import DayBanner from "./components/DayBanner.jsx";

function App() {
  return (
    <>
      <Banner />
      <DayBanner />
      <div className="calendar"></div>
    </>
  );
}

export default App;
