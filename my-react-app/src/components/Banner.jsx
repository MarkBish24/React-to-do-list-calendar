import "./Banner.css";

export default function Banner({ date, nextMonth, prevMonth }) {
  return (
    <div className="banner">
      <span className="left-arrow" onClick={prevMonth}>
        &lt;
      </span>
      <h1>
        {date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h1>
      <span className="right-arrow" onClick={nextMonth}>
        &gt;
      </span>
    </div>
  );
}
