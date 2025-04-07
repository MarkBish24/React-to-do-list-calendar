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
      ></Banner>
    </div>
  );
}
