import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark text-white">
      <div className="flex justify-center bg-blue ">
        <img src="../PICTO-BURGER.png" className="md:hidden w-56 pt-5" alt="" />
      </div>
      <div className="flex justify-center bg-blue h-[500px]">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../BURGERS.png"
            alt="burger_titre"
            className="md:w-2/4 w-full"
          />
          {/* <div className="absolute w-[14vw] md:right-[17vw] right-[14vw] md:top-[160px] top-[330px]">
            <img src="../roue_cranter.png" alt="roue" />
            <p className="absolute top-[5vw] text-[2vw] font-bold left-[4vw]">
              13,90$
            </p>
          </div> */}
          <div className="text-center">
            <h2 className="font-bold text-lg">LA BIQUETTE</h2>
            <p className="font-semibold mb-2">
              Boeuf, chèvre frais, tomate, oignons, sauce moutarde au miel
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">LA POULETTE</h2>
            <p className="font-semibold mb-2">
              Dinde panée, cheddar, tomate, roquette
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">LE GRAND MAMIE</h2>
            <p className="font-semibold mb-2">
              Boeuf, reblochon, lardon, oignons rissolés, sauce montagnarde
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">LE VEGIE</h2>
            <p className="font-semibold mb-2">
              Galettes de légumes, couscous, tomate, oignons rouges
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">LE BURGER DE L'IMPOND</h2>
            <p className="font-semibold mb-2">
              Galerte de pomme de terre, viande haché boeuf, confiture
              d’oignons, cheddar
            </p>
          </div>
          <div className="absolute w-64 right-[10vw] top-[260px] lg:block hidden">
            <img src="../PICTO-BURGER.png" alt="burger" />
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
            Vins
          </button>
        </Link>
        <Link to="/cartes/Tartines" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
            Tartines
          </button>
        </Link>
        <Link to="/cartes/couscous" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
            Couscous
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cartes;
