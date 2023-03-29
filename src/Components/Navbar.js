import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const handleClick = () => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("hidden");
    console.log(nav);
  };

  return (
    <div className="text-white h-1/6 bg-dark">
      <div className="flex py-10 text-white h-1/6 bg-dark">
        <div className="md:pl-10 pl-5 flex justify-center">
          <Link to="/" className="mr-2 md:w-80 w-60 flex justify-center">
            <img src="LOGO_L'IMPOND.png" alt="L'impond'erable" />
          </Link>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-auto mr-5 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <div className="">
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} className="text-3xl mr-8" />
            </button>
          </div>
        </button>
        <div className="hidden lg:flex ml-auto mr-5 items-center mt-3" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 lg:text-sm text-xs">
            <li>
              <Link
                to="/contact"
                className="px-8 font-bold border-2 border-blue rounded-full bg-dark text-white hover:bg-blue transition duration-500"
              >
                RESERVER
              </Link>
            </li>
            <li>
              <Link
                to="/cartes"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  LA CARTE
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/ambiance"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  L'AMBIANCE
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  BLOG & EVENTS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  CONTACT
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-2xl bg-blue">
        <div className="hidden lg:hidden ml-auto mr-5 nav" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 lg:text-sm">
            <li>
              <Link
                onClick={handleClick}
                to="/contact"
                className="px-8 font-bold border-2 border-blue rounded-full bg-dark text-white hover:bg-blue transition duration-500"
              >
                RESERVER
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="/cartes"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  LA CARTE
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="/ambaince"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  L'AMBIANCE
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="/blog"
                className="fon-displaty max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  BLOG & EVENTS
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                to="/contact"
                className="font-display max-w-sm font-bold leading-tight"
              >
                <span className="link link-underline link-underline-black text-white">
                  CONTACT
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
