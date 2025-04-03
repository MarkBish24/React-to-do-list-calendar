import "./Banner.css";

export default function Banner({ date }) {
  return (
    <div className="banner">
      <span className="left-arrow">&lt;</span>
      <h1>
        {date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h1>
      <span className="right-arrow">&gt;</span>
    </div>
  );
}
