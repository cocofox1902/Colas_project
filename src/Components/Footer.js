import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-4/6 bg-dark flex pb-10">
      <div className="text-white lg:w-2/3 pl-20 lg:text-3xl md:text-2xl text-xl font-bold ">
        <img src="LOGO_L'IMPOND.png" alt="logo" className="w-72 pb-10" />
        <div className="md:flex">
          <p className="md:w-1/2 w-full mb-10">
            OUVERT TOUS LES JOURS ! <br /> De 9h00 à 2H00
          </p>
          <p className="md:w-1/2 w-full mb-10">
            320 rue des Pyrénées <br /> 75020 Paris <br /> Métro Jourdain
          </p>
        </div>
        <p className="pb-10">T: 09 83 23 39 14</p>
        <div className="flex pb-10">
          <p>On reste en contact</p>
          <Link to="/contact">
            <img
              src="PICTO_AVION_PAPIER.png"
              alt="avion"
              className="w-12 pl-5"
            />
          </Link>
        </div>
        <p className="md:text-xs text-[10px] font-thin flex">
          Copyright © L'IMPONDERABLE 2022 | Légal Notices | Privacy Policy
        </p>
      </div>
      <div className="bg-white h-5/6 w-1/3 mt-10 lg:block hidden">
        <p className="text-5xl font-bold px-20 text-left pt-20">
          Découvrez notre galerie photos
        </p>
        <div className="flex justify-center py-10">
          <Link
            to="/contact"
            className="px-16 text-lg font-bold border-2 border-blue rounded-full bg-dark text-white hover:bg-blue transition duration-500"
          >
            RESERVER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
