import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import PostPage from "./components/pages/PostPage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <div className="footer">Awesome blog. All rights reserved</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
