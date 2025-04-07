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
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  }

  function changeDayDown() {
    setDate((prevDate) => {
      let newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
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
        dateString={date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
        prev={changeMonthDown}
        next={changeMonthUp}
      />
      <DayBanner />
      <Calendar date={date} showPopUp={showPopUp} hidePopUp={hidePopUp} />
      {isActive ? (
        <PopUpWindow
          dateString={date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          changeDayDown={changeDayDown}
          changeDayUp={changeDayUp}
        />
      ) : null}
    </>
  );
}

export default App;
