import React from "react";
import {
  faCanadianMapleLeaf,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <div className="text-white h-5/6 bg-dark">
      <div className="flex">
        <div className="h-5/6 flex self-center mt-20">
          <ul className="ml-3">
            <li className="flex justify-center py-2">
              <Link to="/blog">
                <FontAwesomeIcon
                  icon={faCanadianMapleLeaf}
                  className="text-3xl mr-5"
                />
              </Link>
            </li>
            <li className="flex justify-center py-2">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl mr-5" />
              </a>
            </li>
            <li className="flex justify-center py-2">
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} className="text-3xl mr-5" />
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-44 justify-center w-full grid mr-14">
          <img
            src="LOGO_L'IMPOND.png"
            alt="L'impond'erable"
            className="justify-self-center w-4/5"
          />
          <p className="flex justify-center pt-10 text-5xl font-bold text-wheat">
            NOS CARTES
          </p>
          <div className="pt-16 pb-14">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 text-wheat">
              <Link to="/cartes/burgers" className="grid">
                <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
                  Burgers
                </button>
              </Link>
              <Link to="/cartes/tapas" className="grid">
                <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
                  Tapas
                </button>
              </Link>
              <Link to="/cartes/vin" className="grid">
                <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
                  Vin
                </button>
              </Link>
              <Link to="/cartes/viandes" className="grid">
                <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
                  Viandes
                </button>
              </Link>
              <Link to="/cartes/salade" className="grid">
                <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
                  Salade
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
