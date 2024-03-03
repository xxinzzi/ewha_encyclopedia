import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./GNB.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        <div className={styles.centeredContent}>
          <FontAwesomeIcon icon={faStar} />
          <span>사전</span>
        </div>
      </div>
      <div onClick={() => handleTabClick("/")} className={styles.gnb__column}>
        <div className={styles.centeredContent}>
          <FontAwesomeIcon icon={faStar} />
          <span>길찾기</span>
        </div>
      </div>
      <div
        onClick={() => handleTabClick("/clubs")}
        className={styles.gnb__column}
      >
        <div className={styles.centeredContent}>
          <FontAwesomeIcon icon={faStar} />
          <span>동아리</span>
        </div>
      </div>
    </div>
  );
};

GNB.propTypes = {
  // PropTypes 정의 필요한 경우 추가
};

export default GNB;
