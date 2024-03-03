import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./MapViewer.module.css";

function MapViewer() {
  return (
    <div className={styles.mapViewer}>
      <img src="../../../ewha_map.jpg" />
    </div>
  );
}

export default MapViewer;
