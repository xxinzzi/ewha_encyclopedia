import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./LocationSelect.module.css";
import LocationSelector from "../LocationSelector/LocationSelector";

function LocationSelect({ onSearch }) {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      if (startLocation && endLocation) {
        // 여기에서 실제 경로 및 이미지 정보를 가져오는 로직을 수행하고,
        // 그 정보를 onSearch 콜백을 통해 전달합니다.
        const route = "경로 정보"; // 실제 경로 정보를 가져오는 로직이 필요합니다.
        const img = "이미지 URL"; // 실제 이미지 정보를 가져오는 로직이 필요합니다.
        onSearch(startLocation, endLocation, route, img);
      } else {
        alert("출발지와 도착지를 모두 선택하세요.");
      }
    };

    handleSearch();
  }, [startLocation, endLocation, onSearch]);

  const handleStartSelect = (selectedLocation) => {
    setStartLocation(selectedLocation);
  };

  const handleEndSelect = (selectedLocation) => {
    setEndLocation(selectedLocation);
  };

  return (
    <div className={styles.locationSelect}>
      <LocationSelector
        label="출발"
        locations={["정문", "후문", "이하우스"]}
        onSelect={handleStartSelect}
      />
      <LocationSelector
        label="도착"
        locations={[
          "이하우스",
          "중앙도서관",
          "포스코관",
          "학문관",
          "학관",
          "종합과학관",
        ]}
        onSelect={handleEndSelect}
      />
    </div>
  );
}

LocationSelect.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default LocationSelect;
