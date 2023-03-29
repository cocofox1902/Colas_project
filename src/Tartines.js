import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark text-white">
      <div className="flex justify-center bg-rouge ">
        <img src="../PICTO-TARTINE.png" className="md:hidden w-56 pt-5" alt="" />
      </div>
      <div className="flex justify-center bg-rouge h-[500px]">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../TARTINES.png"
            alt="burger_titre"
            className="md:w-2/4 w-full"
          />
          <div className="flex text-xl">
            <table className="table-fixed mb-10">
              <thead>
                <tr>
                  <th className="w-64"></th>
                  <th className="w-22"></th>
                </tr>
              </thead>
              <tbody className="font-bold">
                <tr className="float-right pb-10">
                  SERVIES AVEC FRITES
                </tr>
                <tr>
                  <td>TARTINE 3 FROMAGES</td>
                  <td>11.50€</td>
                </tr>
                <tr>
                  <td>TARTINE ESPAGNOLE</td>
                  <td>10.90€</td>
                </tr>
                <tr>
                  <td>TARTINE ITALIENNE</td>
                  <td>12.50€</td>
                </tr>
                <tr>
                  <td>TARTINE PARISIENNE</td>
                  <td>11.90€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute w-64 right-[10vw] top-[260px] lg:block hidden">
            <img src="../PICTO-TARTINE.png" alt="burger" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 text-wheat py-10">
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
            Vins
          </button>
        </Link>
        <Link to="/cartes/Tartines" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 bg-wheat text-dark">
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
