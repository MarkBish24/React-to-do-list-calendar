import "./ToDoNote.css";

export default function ToDoNote({ entry }) {
  const randomColor = setRandomColor();
  return (
    <div
      className="to-do-note"
      style={{
        backgroundColor: `${randomColor}CC`,
        border: `3px solid ${randomColor}`,
      }}
    >
      {entry}
    </div>
  );
}

const colors = [
  "#FBE7C6",
  "#B4F8C8",
  "#A0E7E5",
  "#FFAEBC",
  "#FF8A65",
  "#B39DDB",
];

function setRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
