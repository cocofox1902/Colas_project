import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  return (
    <div className="bg-dark text-whitepb-32">
      <div className="flex justify-center bg-salmon ">
        <img src="../picto_tapas.png" class="md:hidden w-56" alt="" />
      </div>
      <div className="flex justify-center bg-salmon ">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../titrage_Nos_tapas.png"
            alt="tapas_titre"
            className="md:w-2/3 w-3/4"
          />
          <div className="absolute w-[14vw] md:right-[17vw] right-[14vw] md:top-[160px] top-[350px]">
            <img src="../roue_cranter.png" alt="roue" />
            <p className="absolute top-[5vw] text-[2vw] font-bold left-[4vw]">
              13,90$
            </p>
          </div>
          <div className="flex">
            <table class="table-fixed mt-5 mb-10">
              <thead>
                <tr>
                  <th className="w-10"></th>
                  <th className="w-72"></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="font-bold">
                <tr>
                  <td>X6</td>
                  <td>TARTINE HOUMOUS</td>
                  <td>6.90€</td>
                </tr>
                <tr>
                  <td>X5</td>
                  <td>STICKS DE MOZZA</td>
                  <td>6.90€</td>
                </tr>
                <tr>
                  <td>X9</td>
                  <td>OIGNONS RINGS</td>
                  <td>7.50€</td>
                </tr>
                <tr>
                  <td>X6</td>
                  <td>ACCRAS DE POISSONS</td>
                  <td>7.90€</td>
                </tr>
                <tr>
                  <td>X5</td>
                  <td>ASSIETTE DE CALAMARS</td>
                  <td>7.90€</td>
                </tr>
                <tr>
                  <td>X6</td>
                  <td>EMPANADAS THON OU VÉGÉ</td>
                  <td>8.50€</td>
                </tr>
                <tr>
                  <td>X6</td>
                  <td>CROQUETTE POMME DE TERRE</td>
                  <td>4.90€</td>
                </tr>
                <tr>
                  <td>X6</td>
                  <td>MINI-BROCHETTES SAUCISSE À L’AIL</td>
                  <td>5.90€</td>
                </tr>
                <tr>
                  <td>X6</td>
                  <td>MINI-BROCHETTES DE CREVETTES</td>
                  <td>5.90€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute w-64 right-[8vw] top-[360px] lg:block hidden">
            <img src="../picto_tapas.png" alt="tapas" />
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
          <button className="text-5xl font-bold border-2 p-5 m-2 bg-wheat text-dark">
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
  );
};

export default Cartes;
