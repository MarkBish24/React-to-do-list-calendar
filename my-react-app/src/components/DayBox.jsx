import "./DayBox.css";

export default function DayBox({ day }) {
  return (
    <div className="day-box">
      <span className="day-text">{day}</span>
      <button className="note-button">+</button>
      <div className="note-container"></div>
    </div>
  );
}
