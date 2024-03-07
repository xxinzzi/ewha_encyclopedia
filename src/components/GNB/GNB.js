import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GNB.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const GNB = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("/dictionary");

  const handleTabClick = (path) => {
    navigate(path);
    setSelectedTab(path);
  };

  const Tab = ({ path, label, selected }) => {
    const tabStyle = selected
      ? `${styles.gnb__column} ${styles.selectedTab}`
      : styles.gnb__column;

    const starIcon = selected ? (
      <FontAwesomeIcon icon={solidStar} />
    ) : (
      <FontAwesomeIcon icon={regularStar} />
    );

    return (
      <div onClick={() => handleTabClick(path)} className={tabStyle}>
        <div className={styles.centeredContent}>
          {starIcon}
          <span
            className={
              selected
                ? `${styles.tabText} ${styles.selectedText}`
                : styles.tabText
            }
          >
            {label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.gnb}>
      <Tab
        path="/dictionary"
        label="사전"
        selected={selectedTab === "/dictionary"}
      />
      <Tab path="/" label="길찾기" selected={selectedTab === "/"} />
      <Tab path="/clubs" label="동아리" selected={selectedTab === "/clubs"} />
    </div>
  );
};

export default GNB;
