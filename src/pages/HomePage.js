import { useText } from "../Component/TextContext";
import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

import Home from "../Component/Home";
const HomePage = () => {
  const [action, setAction] = React.useState("");
  const { setText } = useText();
  const navigate = useNavigate();
  const handleActionChange = (newAction) => {
    const actionWithoutSpaces = newAction.replace(/\s/g, "");
    setAction(actionWithoutSpaces.toLowerCase());
    if (action === "getallcountries") {
      navigate(`/resultPage/${encodeURIComponent(action)}`);
    }
  };

  const handleSave = (textValue) => {
    setText(textValue);

    if (action !== "") {
      navigate(`/resultPage/${encodeURIComponent(action)}`);
    }
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
