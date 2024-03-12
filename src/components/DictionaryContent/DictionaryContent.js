import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./DictionaryContent.module.css";
import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import Detail from "../Detail/Detail";

const DictionaryContent = ({ initialWords }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [detail, setDetail] = useState("");
  const [vocabs, setVocabs] = useState(initialWords);

  useEffect(() => {
    const storedVocabs = JSON.parse(localStorage.getItem("vocabs"));
    if (storedVocabs) {
      setVocabs(storedVocabs);
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openDetail = () => setShowDetail(true);
  const closeDetail = () => setShowDetail(false);

  const handleDetailClick = (selectedWord) => {
    openDetail(selectedWord);
  };

  const handleAddWord = () => {
    if (word.trim() === "" || meaning.trim() === "") {
      alert("단어와 뜻은 필수 입력사항입니다.");
      return 0;
    }

    const newWord = {
      word: word.trim(),
      meaning: meaning.trim(),
      detail: detail.trim(),
    };
    setVocabs((currentArray) => [...currentArray, newWord]);

    localStorage.setItem("vocabs", JSON.stringify([...vocabs, newWord]));

    setWord("");
    setMeaning("");
    setDetail("");
    closeModal();
  };

  return (
    <div className={styles.DictionaryContent}>
      {vocabs.map((item, index) => (
        <div key={index} className={styles.wordBox}>
          <p className={styles.word}>{item.word}</p>
          <p className={styles.meaning}>{item.meaning}</p>
          <button
            className={styles.detailButton}
            onClick={() => handleDetailClick(item.word)}
          >
            Detail {">"}
          </button>
        </div>
      ))}
      <div className={styles.addButtonDiv}>
        <button className={styles.addButton} onClick={openModal}>
          단어 추가
        </button>
      </div>

      {showModal && (
        <Modal closeModal={closeModal}>
          <div>
            <InputField
              label="단어"
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <InputField
              label="뜻"
              type="text"
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
            />
            <InputField
              label="상세설명"
              type="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <div className={styles.completeButtonDiv}>
              <button
                className={`${styles.completeButton} ${
                  word.trim() === "" || meaning.trim() === ""
                    ? ""
                    : styles.activateCompleteButton
                }`}
                onClick={handleAddWord}
              >
                완료
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

DictionaryContent.propTypes = {
  initialWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      meaning: PropTypes.string.isRequired,
      detail: PropTypes.string,
    })
  ).isRequired,
};

export default DictionaryContent;
