import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const ShowBurger = () => {
  return (
    <div className="bg-dark pt-28 pb-56">
      <div>
        <img
          src="TYPO_SAIGNANT.png"
          alt="saignant"
          className="w-[17vw] absolute left-10 mt-[10vw] ml-[30vw]"
        />
        <img src="PHOTO-BURGER.jpg" alt="burger1" className="w-2/3 ml-[30vw]" />
      </div>
      <Link
        to="/cartes/burgers"
      >
        <img
          data-scroll-speed="3"
          src="PICTO_MENU_BEIGE.png"
          alt="menu"
          className="absolute mt-[3vw] ml-[88vw] w-[10vw]"
        />
      </Link>
      <img
        data-scroll-speed="7"
        src="TEXTE_ACCOMPAGNÉ_DE_FRITES.png"
        alt="frites"
        className="absolute mt-[15vw] w-[40vw] ml-[58vw]"
      />
      <img
        data-scroll-speed="4"
        src="TEXTE_MMMMM.png"
        alt="mmm"
        className="absolute mt-[35vw] ml-[20vw] w-[25vw]"
      />
      <img
        data-scroll-speed="5"
        src="PHOTO-BURGER2.jpg"
        alt="burger2"
        className="mt-[5vw] ml-[5vw] w-[70vw]"
      />
      <script src="index2.js"></script>
    </div>
  );
};

export default ShowBurger;
