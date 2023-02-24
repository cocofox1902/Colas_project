import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  return (
    <div className="bg-dark text-whitepb-32">
      <div className="flex justify-center bg-blue ">
        <img src="../picto_burger.png" className="md:hidden w-56" alt="" />
      </div>
      <div className="flex justify-center bg-blue ">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../titrage_Nos_burger.png"
            alt="burger_titre"
            className="md:w-2/3 w-3/4"
          />
          <div className="absolute w-[14vw] md:right-[17vw] right-[14vw] md:top-[160px] top-[330px]">
            <img src="../roue_cranter.png" alt="roue" />
            <p className="absolute top-[5vw] text-[2vw] font-bold left-[4vw]">
              13,90$
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl">LA BIQUETTE</h2>
            <p className="font-semibold mb-5">
              Boeuf, chèvre frais, tomate, oignons, sauce moutarde au miel
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl">LA POULETTE</h2>
            <p className="font-semibold mb-5">
              Dinde panée, cheddar, tomate, roquette
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl">LE GRAND MAMIE</h2>
            <p className="font-semibold mb-5">
              Boeuf, reblochon, lardon, oignons rissolés, sauce montagnarde
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl">LE VEGIE</h2>
            <p className="font-semibold mb-5">
              Galettes de légumes, salade, tomate, oignons rouges
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl">LE BURGER DE L'IMPOND</h2>
            <p className="font-semibold mb-5">
              Galerte de pomme de terre, viande haché boeuf, confiture
              d’oignons, cheddar
            </p>
          </div>
          <div className="absolute w-64 right-[10vw] top-[360px] lg:block hidden">
            <img src="../picto_burger.png" alt="burger" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 text-wheat py-10">
        <Link to="/cartes/burgers" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 bg-wheat text-dark">
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
        <Link to="/cartes/Tartines" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
            Tartines
          </button>
        </Link>
        <Link to="/cartes/salade" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
            Salade
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cartes;