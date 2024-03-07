import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const handleSearchClick = (event) => {
    console.log(searchQuery);
    // 여기에서 검색어 활용 또는 검색 동작 수행
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchForm}>
        <div className={styles.searchContainer}>
          <div className={styles.searchIcon} onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery} // 현재 검색어 표시
            onChange={handleInputChange} // 검색어 변경 이벤트 핸들러
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
