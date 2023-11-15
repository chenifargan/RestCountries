import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

import Home from "../Component/Home";
const HomePage = () => {
  const [action, setAction] = React.useState("");

  const navigate = useNavigate();
  const handleActionChange = (newAction) => {
    const actionWithoutSpaces = newAction.replace(/\s/g, "");
    setAction(actionWithoutSpaces.toLowerCase());
    navigate(
      `/resultPage/${encodeURIComponent(actionWithoutSpaces.toLowerCase())}`
    );
  };

  const handleSave = (textValue) => {
    console.log("Received text value in homePage:", textValue);
  };

  return (
    <div className="containerHomePage">
      <Home
        action={action}
        handleActionChange={handleActionChange}
        handleSave={handleSave}
      />
    </div>
  );
};
export default HomePage;
