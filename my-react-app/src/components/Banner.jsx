import "./Banner.css";

export default function Banner({ dateTitle }) {
  return (
    <div className="banner">
      <span className="left-arrow">&lt;</span>
      <h1>{dateTitle}</h1>
      <span className="right-arrow">&gt;</span>
    </div>
  );
}
