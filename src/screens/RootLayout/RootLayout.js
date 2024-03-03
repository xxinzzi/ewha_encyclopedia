import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
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
    <div className={styles.rootLayout}>
      <h3 className={styles.tabName}>{tabName}</h3>
      <div className={styles.outlet}>
        <Outlet />
        {children}
      </div>
      <GNB />
    </div>
  );
};

export default RootLayout;
