import "./App.css";
import LoginControl from "./LoginControl";

function App(props) {
  return (
    <div>
      <LoginControl hasNewMessage credit={12} warning />
    </div>
  );
}

export default App;
