import React, { useState } from "react";
import LocationSelect from "../../components/LocationSelect/LocationSelect.js";
import MapViewer from "../../components/MapViewer/MapViewer.js";
import RouteNavigator from "../../components/RouteNavigator/RouteNavigator.js";

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
    <div className="navigation">
      <LocationSelect onSearch={handleSearch} />
      <MapViewer />
      <RouteNavigator {...routeInfo} />
    </div>
  );
};

export default Navigation;
