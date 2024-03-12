import React, { useState } from "react";
import styles from "./Dictionary.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import DictionaryContent from "../../components/DictionaryContent/DictionaryContent";

const Dictionary = () => {
  const initialWords = [
    { word: "통글", meaning: "통합적사고와글쓰기" },
    { word: "대영", meaning: "대학영어" },
    { word: "융교", meaning: "융합교양" },
    // ... 다른 초기 단어들
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.dictionary}>
      <div className={styles.searchBarDiv}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <DictionaryContent
        initialWords={initialWords.filter((word) =>
          word.word.toLowerCase().includes(searchQuery.toLowerCase())
        )}
      />
    </div>
  );
};

export default Dictionary;
