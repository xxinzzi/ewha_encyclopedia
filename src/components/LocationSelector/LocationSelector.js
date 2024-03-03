import React, { useState } from "react";
import styles from "./LocationSelector.module.css";

const LocationSelector = ({ label, locations, onSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLocation(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className={styles.selectorDiv}>
      <label className={styles.label}>{label}</label>
      <select value={selectedLocation} onChange={handleSelectChange}>
        <option value="" disabled>
          Select {label}
        </option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
