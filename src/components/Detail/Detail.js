import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Detail.module.css";

const Detail = ({ children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        // ESC 키를 누르면 모달 닫기
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, "");

  return (
    <div className={styles.overlay}>
      <div className={styles.detail}>{children}</div>
    </div>
  );
};

Detail.propTypes = {
  closeDetail: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Detail;
