import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

const PrivateRoute = () => {
  const { user } = useContext(ThemeContext);

  return user ? (
    <ProfilePage props={{ ...user }} />
  ) : (
    <Navigate replace to="/login" />
  );
};
export default PrivateRoute;
