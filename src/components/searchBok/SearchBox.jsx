import { useState } from "react";
import "./SearchBox.css";
import { IoIosSearch } from "react-icons/io";

function SearchBox({ onSearch, word }) {
  const [currentWord, setCurrentWord] = useState(word);

  const handleInput = (e) => {
    setCurrentWord(e.target.value);
  };

  const onKeyDown = (e) => {
    e.key === "Enter" ? onSearch(currentWord) : "";
  };

  return (
    <div className="serach__area">
      <input
        type="text"
        placeholder="Type Here and Hit Enter"
        className="search__box"
        value={currentWord}
        onChange={handleInput}
        onKeyDown={onKeyDown}
      />
      <IoIosSearch className="search__icon" />
    </div>
  );
}

export default SearchBox;
