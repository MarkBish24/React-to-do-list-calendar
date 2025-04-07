import "./DayBox.css";
import calendarData from "../data.json";
import ToDoNote from "./ToDoNote.jsx";

export default function DayBox({ day, date, showPopUp }) {
  return (
    <div className="day-box">
      <span className="day-text">{day}</span>
      <button className="note-button" onClick={showPopUp}>
        +
      </button>
      <div className="note-container">
        {calendarData[date] ? createNotes(calendarData[date].events) : null}
      </div>
    </div>
  );
}
function createNotes(events) {
  return events.map((entry) => {
    return <ToDoNote entry={entry} />;
  });
}
