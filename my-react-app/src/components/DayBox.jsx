import "./DayBox.css";

export default function DayBox() {
  return (
    <div className="day-box">
      <span className="day-text">12</span>
      <button className="note-button">+</button>
      <div className="note-container"></div>
    </div>
  );
}
