import { useEffect, useState } from "react";

const useAPI = (word) => {
  const [data, setData] = useState({});

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setData(...res));
  }, [word]);

  return data;
};

export default useAPI;
