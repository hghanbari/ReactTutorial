import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import PostPage from "./components/pages/PostPage";
import LoginPage from "./components/pages/LoginPage";
import CreatePostPage from "./components/pages/CreatePostPage";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="/serch/:query?" element={<HomePage />} />
            <Route path="/user/:userId" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="/create/*" element={<CreatePostPage />} />
          </Routes>
        </div>
        <div className="footer">Awesome blog. All rights reserved</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
