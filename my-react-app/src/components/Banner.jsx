import "./Banner.css";

export default function Banner({ dateString, next, prev }) {
  return (
    <div className="banner">
      <span className="left-arrow" onClick={prev}>
        &lt;
      </span>
      <h1>{dateString}</h1>
      <span className="right-arrow" onClick={next}>
        &gt;
      </span>
    </div>
  );
}
