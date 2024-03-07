import React, { useState } from "react";
import styles from "./Dictionary.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import DictionaryContent from "../../components/DictionaryContent/DictionaryContent";

const Dictionary = () => {
  const [wordInfo, setWordInfo] = useState({});

  const handleSearch = () => {
    setWordInfo({});
  };

  return (
    <div className={styles.dictionary}>
      <SearchBar />
      <DictionaryContent />
    </div>
  );
};

export default Dictionary;
