import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        // ESC 키를 누르면 모달 닫기
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  const handleOverlayClick = (event) => {
    // 모달 외부를 클릭하면 모달 닫기
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <div className={styles.modalChildren}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
