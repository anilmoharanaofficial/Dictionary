import { useRef } from "react";
import "./Result.css";
import { FaPlay } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function Result({ result }) {
  // Data
  const { word, phonetic, phonetics = [], meanings = [], sourceUrls } = result;
  const [ukPhonetic, usPhonetic] = phonetics;
  const [data] = meanings;

  console.log(data?.synonyms);

  // Handle Adiou
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="result__container">
      <div className="word">
        <div>
          <h1>{word}</h1>
          <p className="phonetic">{phonetic}</p>
        </div>
        <div>
          {usPhonetic?.audio ? (
            <div className="circle">
              <FaPlay className="play__btn" onClick={handlePlay} />
              {usPhonetic?.audio && (
                <audio ref={audioRef} src={usPhonetic?.audio} />
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Results */}
      <div className="results">
        <div className="noun__container">
          <div className="heading">
            <h3>{data?.partOfSpeech}</h3>
            <div className="line"></div>
          </div>

          <div className="meanings">
            <p>Meaning</p>
            <ul className="definitions">
              {data?.definitions.map((def, index) => (
                <li key={index}>{def.definition}</li>
              ))}
            </ul>
            <div className="synonyms">
              {data?.synonyms?.length > 0 && <p>Synonyms</p>}

              {data?.synonyms.map((synonyms) => (
                <span className="show__synonyms" key={synonyms}>
                  {synonyms}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="verb__container"></div>
        {/* Source  */}
        <div className="source">
          <div className="line"></div>
          <div className="source__link">
            <p>Source</p>{" "}
            <span>
              <a href={`${sourceUrls}`} target="_blank">
                {sourceUrls} <FaExternalLinkAlt className="link__icon" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
