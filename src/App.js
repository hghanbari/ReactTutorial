import "./App.css";
import NumberList from "./NumberList";

function App(props) {
  const number = [23, 31, 31, "Test"];
  const number2 = [20, 31, 39, "Test"];
  const todos = [
    { id: "1", name: "Hamid", isDoen: false },
    {
      id: "2",
      name: "Sima",
      isDoen: true,
    },
  ];
  return (
    <div>
      <NumberList number={number} />
      <NumberList number={number2} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}-{todo.isDoen ? "Doen" : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
