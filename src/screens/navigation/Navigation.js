import React from "react";
import LocationSelect from "../../components/LocationSelect/LocationSelect.js";
import MapViewer from "../../components/MapViewer/MapViewer.js";
import RouteNavigator from "../../components/RouteNavigator/RouteNavigator.js";

const Navigation = () => {
  return (
    <div className="navigation">
      <LocationSelect />
      <MapViewer />
      <RouteNavigator />
    </div>
  );
};

export default Navigation;
