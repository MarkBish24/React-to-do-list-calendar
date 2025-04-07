import "./PopUpWindow.css";
import Banner from "./Banner.jsx";

export default function PopUpWindow({ date, changeDayDown, changeDayUp }) {
  return (
    <div className="pop-up-window">
      <Banner
        date={date}
        changeDayDown={changeDayDown}
        changeDayUp={changeDayUp}
      ></Banner>
    </div>
  );
}
