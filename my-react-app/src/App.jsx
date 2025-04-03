import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import DayBanner from "./components/DayBanner.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Banner date={date} />
      <DayBanner />
      <Calendar date={date} />
    </>
  );
}

export default App;
