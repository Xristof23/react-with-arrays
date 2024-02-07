import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "apple", color: "green" },
    { id: 1, name: "🍌 banane", color: "yellow" },
    { id: 2, name: "cherry", color: "red" },
    { id: 3, name: "dragonfruit", color: "pink" },
    { id: 4, name: "elderberry", color: "black" },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <Card id={fruit.id} name={fruit.name} color={fruit.color} />
        </div>
      ))}
    </div>
  );
}
