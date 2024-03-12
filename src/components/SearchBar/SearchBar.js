import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    onSearch(searchQuery);
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
            className={styles.searchBarInput}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
