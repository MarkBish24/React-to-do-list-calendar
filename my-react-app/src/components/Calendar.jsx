import "./Calendar.css";
import DayBox from "./DayBox.jsx";

export default function Calendar({ date }) {
  return <div className="calendar">{updateMonth(date)}</div>;
}

function updateMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const firstDay = daysInMonth[0].getDay();

  let weeks = [];
  let week = [];
  let i = firstDay === 6 ? 1 : -firstDay;
  while (i <= daysInMonth.length) {
    if (i <= 0) {
      week.push(<div className="empty-box" key={`empty-${i}`}></div>);
    } else {
      week.push(<DayBox day={i} />);
    }
    if (week.length === 7) {
      weeks.push(updateWeek(week));
      week = [];
    }
    i++;
  }
  while (week.length < 7) {
    week.push(<div className="empty-box" key={`empty-${week.length}`}></div>);
  }
  weeks.push(updateWeek(week));
  return <>{weeks}</>;
}

function updateWeek(week) {
  return <div className="calendar-row">{week}</div>;
}

function getDaysInMonth(year, month) {
  const days = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() == month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
