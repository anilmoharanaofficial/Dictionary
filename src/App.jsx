import Header from "./components/header/Header";
import SearchBox from "./components/searchBok/SearchBox";
import useAPI from "./api/useAPI";
import Result from "./components/result/Result";
import { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState("Computer");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onSearch = (newWord) => {
    setWord(newWord);
  };
  const result = useAPI(word);

  // Handle DarkMode
  const handleDarkMode = (set) => {
    setIsDarkMode(set);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark__mode");
    } else {
      document.body.classList.remove("dark__mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <Header darkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <SearchBox onSearch={onSearch} word={word} />
      <Result result={result} />
    </div>
  );
}

export default App;
