import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./GNB.module.css";

const GNB = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.gnb}>
      <div
        onClick={() => handleTabClick("/dictionary")}
        className={styles.gnb__column}
      >
        <span>백과사전</span>
      </div>
      <div
        onClick={() => handleTabClick("/")}
        className={`${styles.gnb__column} ${styles.gnb__center}`}
      >
        <span>길찾기</span>
      </div>
      <div
        onClick={() => handleTabClick("/clubs")}
        className={`${styles.gnb__column} ${styles.gnb__right}`}
      >
        <span>동아리</span>
      </div>
    </div>
  );
};

GNB.propTypes = {
  // PropTypes 정의 필요한 경우 추가
};

export default GNB;
