import "./Card.css";

export default function Card({ name, color }) {
  const newNameOfClass = "card--" + color;
  return <p className={newNameOfClass}>{name}</p>;
}
