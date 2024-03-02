import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import GNB from "../../components/GNB/GNB";

const RootLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let tabName = "";
  switch (location.pathname) {
    case "/":
      tabName = "길찾기";
      break;
    case "/dictionary":
      tabName = "사전";
      break;
    case "/clubs":
      tabName = "동아리";
      break;
    default:
      tabName = "Unknown";
  }

  return (
    <div className="root-layout">
      <h3>{tabName}</h3>
      <Outlet />
      {children}
      <GNB />
    </div>
  );
};

export default RootLayout;
