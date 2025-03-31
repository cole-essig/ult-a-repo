import React from "react";
import { useState } from "react";
import './Header.css'

function Header() {
    const [isClicked, setIsClicked] = useState(false);

    const onClick = (e) => {
      e.preventDefault();
      setIsClicked(!isClicked)
    }

    return (
        <header className="header">
           <h1 className="header__title">Ult-a-Repo</h1>
           <button onClick={onClick} type="button" className={`header__button ${isClicked ? 'header__button_hide' : ""}`}>
             <img 
               alt="dropdown menu"
               className="header__button_image"
               src="src\assets\dropdown_white.svg"
             />
           </button>
        </header>
    )
}

export default Header;