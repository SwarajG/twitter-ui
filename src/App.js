import axios from "axios";
import { getCookie, deleteCookie } from "./utils/cookieHelper";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const onGoogleClick = () => {
    window.open("http://localhost:3000/v1/auth/google", "_self");
  };
  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:3000/v1/users/${getCookie("user_id")}`
    );
    setUser(response.data);
  }, []);
  const onLogoutClick = () => {
    deleteCookie("authorization");
    deleteCookie("refresh_token");
    deleteCookie("user_id");
    window.location.reload();
  };
  return (
    <div className="App">
      <h1>Hello {user.name}</h1>
      <button onClick={onGoogleClick}>Google Login</button>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  );
}

export default App;
