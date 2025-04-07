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

  function changeDayUp() {
    setDate((prevDate) => {
      let newDate = new Date(prevDate);
      newDate.setDay(newDate.getDay() + 1);
      return newDate;
    });
  }
  function changeDayDown() {
    setDate((prevDate) => {
      let newDate = new Date(prevDate);
      newDate.setDay(newDate.getDay() - 1);
      return newDate;
    });
  }

  function showPopUp() {
    console.log("Pop Up");
    setIsActive(true);
  }
  function hidePopUp() {
    console.log("Pop Down");
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
      {isActive ? (
        <PopUpWindow
          date={date}
          changeDayDown={changeDayDown}
          changeDayUp={changeDayUp}
        />
      ) : null}
    </>
  );
}

export default App;
