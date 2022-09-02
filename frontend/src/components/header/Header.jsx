import React from "react";
import GoCarLogo from "../resources/GoCarLogo.svg";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <img src={GoCarLogo} alt="GoCar Logo" />
      <div className="header-actions">
        <h3>
          <FontAwesomeIcon icon={faCirclePlus} />
          დაამატეთ ავტომობილი
        </h3>
        <h3>
          <FontAwesomeIcon icon={faUser} />
          ავტორიზაცია
        </h3>
        <div class="dropdown">
          <button class="dropbtn">GE</button>
          <div class="dropdown-content">
            <a href="/">EN</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
