import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RouteNavigator.module.css";

function RouteNavigator({ departure, destination, route, img }) {
  const [selectedRoute, setSelectedRoute] = useState("recommendation");

  const handleButtonClick = (routeType) => {
    setSelectedRoute(routeType);
  };

  const renderButton = (routeType, label) => (
    <button
      className={`${styles.button} ${
        selectedRoute === routeType ? styles.selectedButton : ""
      }`}
      onClick={() => handleButtonClick(routeType)}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className={styles.buttonForm}>
        {renderButton("recommendation", "추천경로")}
        {renderButton("minimumPavement", "최소보도")}
      </div>
      <div className={styles.routeContainer}>
        <p className={styles.route}>{route}</p>
      </div>
    </div>
  );
}

RouteNavigator.propTypes = {
  //departure: PropTypes.string.isRequired,
  //destination: PropTypes.string.isRequired,
  //route: PropTypes.string.isRequired,
  //img: PropTypes.,
};

export default RouteNavigator;
