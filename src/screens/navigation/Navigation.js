import React, { useState } from "react";
import LocationSelect from "../../components/LocationSelect/LocationSelect.js";
import MapViewer from "../../components/MapViewer/MapViewer.js";
import RouteNavigator from "../../components/RouteNavigator/RouteNavigator.js";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [routeInfo, setRouteInfo] = useState({
    departure: null,
    destination: null,
    route: null,
    img: null,
  });

  const handleSearch = (departure, destination, route, img) => {
    setRouteInfo({
      departure,
      destination,
      route,
      img,
    });
  };

  return (
    <div className={styles.navigation}>
      <LocationSelect onSearch={handleSearch} />
      <div className={styles.viewer}>
        <div className={styles.mapViewer}>
          <MapViewer />
        </div>
        <RouteNavigator {...routeInfo} />
      </div>
    </div>
  );
};

export default Navigation;
