import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/sorting")}>sorting</button>
      <button onClick={() => navigate("/graph")}>graph</button>
    </>
  );
};
export default MainPage;
