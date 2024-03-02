import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./LocationSelect.module.css";
import LocationSelector from "../LocationSelector/LocationSelector";

function LocationSelect() {
  const [select, setSelect] = useState(false);
  const onSelect = (event) => {
    event.preventDefault();
    setSelect(true); //엔터를 누르면 select 값을 바꿈
  };

  return (
    <div class="location-select">
      <LocationSelector
        label="출발"
        locations={["정문", "후문", "이하우스"]}
        onSelect={onSelect}
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
        onSelect={onSelect}
      />
      <button>검색</button>
    </div>
  );
}

export default LocationSelect;
