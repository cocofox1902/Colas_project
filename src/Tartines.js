import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
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
          <div className="flex">
            <table className="table-fixed mt-5 mb-10">
              <thead>
                <tr>
                  <th className="w-48"></th>
                  <th className="w-22"></th>
                </tr>
              </thead>
              <tbody className="font-bold">
                <tr className="float-right pb-5">
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
            <img src="../picto_burger.png" alt="burger" />
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
            Vin
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
