import Result from "../result/Result";
import "./SearchBox.css";
import { IoIosSearch } from "react-icons/io";

function SearchBox() {
  return (
    <div className="serach__area">
      <input type="text" placeholder="Type Here" className="search__box" />
      <IoIosSearch className="search__icon" />
      <Result />
    </div>
  );
}

export default SearchBox;
