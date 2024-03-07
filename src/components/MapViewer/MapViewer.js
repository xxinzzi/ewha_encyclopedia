import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./MapViewer.module.css";
import ewha from "./ewha.jpg";

const MapViewer = () => {
  return (
    <div className={styles.mapViewer}>
      <img src={ewha} />
    </div>
  );
};

export default MapViewer;
