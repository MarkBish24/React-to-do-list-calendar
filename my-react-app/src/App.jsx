import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import DayBanner from "./components/DayBanner.jsx";
import DayBox from "./components/DayBox.jsx";

function App() {
  return (
    <>
      <Banner />
      <DayBanner />
      <div className="calendar">
        <DayBox />
        <DayBox />
        <DayBox />
        <DayBox />
        <DayBox />
        <DayBox />
        <DayBox />
      </div>
    </>
  );
}

export default App;
