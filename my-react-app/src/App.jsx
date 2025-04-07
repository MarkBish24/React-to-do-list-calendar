import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner.jsx";
import DayBanner from "./components/DayBanner.jsx";
import Calendar from "./components/Calendar.jsx";
import PopUpWindow from "./components/PopUpWindow.jsx";

function App() {
  const [date, setDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

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

  function showPopUp() {
    console.log("Pop Up");
    setIsActive(true);
  }
  function hidePopUp() {
    setIsActive(false);
  }

  return (
    <>
      <Banner
        date={date}
        nextMonth={changeMonthUp}
        prevMonth={changeMonthDown}
      />
      <DayBanner />
      <Calendar date={date} showPopUp={showPopUp} hidePopUp={hidePopUp} />
      {isActive ? <PopUpWindow /> : null}
    </>
  );
}

export default App;
