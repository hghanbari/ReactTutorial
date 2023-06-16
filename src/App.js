import logo from "./logo.svg";
import "./App.css";

function App() {
  function formatName(userName) {
    return userName.toUpperCase();
  }

  function getGreeting(userName) {
    if (userName) return <h1>Hello {formatName(userName)}</h1>;
    else {
      return <h1>Hello Stranger</h1>;
    }
  }
  const name = "Hamid Ghanbari";
  const element = <h1>Hello {formatName(name)} !</h1>;

  return getGreeting("Jang");
}

export default App;
