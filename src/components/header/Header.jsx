import "./Header.css";
import { LuBookMinus } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function Header({ darkMode, handleDarkMode }) {
  return (
    <div className="header">
      <div>
        <LuBookMinus className="logo" />
      </div>
      <div>
        {!darkMode ? (
          <IoMoonOutline
            className="white__moon"
            onClick={() => handleDarkMode(true)}
          />
        ) : (
          <IoSunny
            className="light__mode"
            onClick={() => handleDarkMode(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
