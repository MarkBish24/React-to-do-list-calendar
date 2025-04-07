import "./PopUpWindow.css";
import Banner from "./Banner.jsx";

export default function PopUpWindow({
  dateString,
  changeDayDown,
  changeDayUp,
}) {
  return (
    <div className="pop-up-window">
      <Banner
        dateString={dateString}
        prev={changeDayDown}
        next={changeDayUp}
        style={{ fontSize: "30px" }}
      ></Banner>
      <div className="container">
        <div className="time-container">
          <h2>Select a Time</h2>
          <select className="times-drop-down-menu" size="8">
            {getTimes().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <button className="add-button">Add Task</button>
        </div>
        <div className="input-container">
          <h2>Enter a Task</h2>
          <input
            className="input-title"
            placeholder="Please Enter the Task..."
          ></input>
          <textarea
            className="input-description"
            placeholder="Please Enter the Description of the Task..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function getTimes() {
  const times = [];
  for (let hour = 1; hour < 25; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const hourStr = hour.toString();
      const minuteStr = minute.toString().padStart(2, "0");
      times.push(`${hourStr}:${minuteStr}`);
    }
  }
  return times;
}
