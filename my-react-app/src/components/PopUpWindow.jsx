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
      <div className="input-container">
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
  );
}
