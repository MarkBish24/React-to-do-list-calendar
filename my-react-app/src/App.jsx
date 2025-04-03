import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import DayBanner from "./components/DayBanner.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  return (
    <>
      <Banner dateTitle={"March"} />
      <DayBanner />
      <Calendar />
    </>
  );
}

export default App;
