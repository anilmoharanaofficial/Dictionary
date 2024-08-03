import "./Header.css";
import { LuBookMinus } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div>
        <LuBookMinus className="logo" />
      </div>
      <div>
        <FaRegMoon className="white__moon" />
      </div>
    </div>
  );
}

export default Header;
