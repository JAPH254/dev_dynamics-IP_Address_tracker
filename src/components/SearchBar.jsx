import React from "react";
import iconArrow from '../assets/images/icon-arrow.svg'

export default function SearchBar() {
  return (
    <div className="search__input--emul">
      <input type="search" className="search__input" />
      <a href="./"></a>
      <button className="search__button">
        <img src={iconArrow} />
      </button>
    </div>
  );
}
