import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import DayBanner from "./components/DayBanner.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  const [date, setDate] = useState(new Date());

  function changeMonthUp() {
    setDate((prevDate) => {
      let newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }
  function changeMonthDown() {
    setDate((prevDate) => {
      let newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }

  return (
    <>
      <Banner
        date={date}
        nextMonth={changeMonthUp}
        prevMonth={changeMonthDown}
      />
      <DayBanner />
      <Calendar date={date} />
    </>
  );
}

export default App;
