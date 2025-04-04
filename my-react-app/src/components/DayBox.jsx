import "./DayBox.css";
import calendarData from "../data.json";
import ToDoNote from "./ToDoNote.jsx";

export default function DayBox({ day, date }) {
  return (
    <div className="day-box">
      <span className="day-text">{day}</span>
      <button className="note-button">+</button>
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
