import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark text-white">
      <div className="flex justify-center bg-jaune ">
        <img src="../PICTO-TAPAS.png" className="md:hidden w-56 pt-5" alt="" />
      </div>
      <div className="flex justify-center bg-jaune h-[500px]">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../TAPAS.png"
            alt="tapas_titre"
            className="md:w-2/4 w-full"
          />
          <div className="flex">
            <table className="table-fixed mt-5 mb-10">
              <thead>
                <tr>
                  <th className="w-20"></th>
                  <th className="md:w-72 w-60"></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="font-bold">
                <tr>
                  <td>X9</td>
                  <td>ASSIETTE DE CALAMARS</td>
                  <td>7.90€</td>
                </tr>
                <tr>
                  <td>X12</td>
                  <td>ONIONS RINGS</td>
                  <td>6.90€</td>
                </tr>
                <tr>
                  <td>X12</td>
                  <td>STICKS DE MOZZA</td>
                  <td>8.00€</td>
                </tr>
                <tr>
                  <td>250gr</td>
                  <td>FUET CATALAN AVEC SALADE</td>
                  <td>9.50€</td>
                </tr>
                <tr>
                  <td>210gr</td>
                  <td>POULPE MARINIÈRE</td>
                  <td>7.50€</td>
                </tr>
                <tr>
                  <td>210gr</td>
                  <td>CHIPIRONS A L'AMERICAINE</td>
                  <td>7.50€</td>
                </tr>
                <tr>
                  <td>210gr</td>
                  <td>CHIPIRONS A L'ENCRE</td>
                  <td>7.50€</td>
                </tr>
                <tr>
                  <td>210gr</td>
                  <td>PÂTÉ LANDAIS AU FOIE GRAS</td>
                  <td>8.90€</td>
                </tr>
                <tr>
                  <td>X1</td>
                  <td>BOUDIN BASQUE</td>
                  <td>7.50€</td>
                </tr>
                <tr>
                  <td>X1</td>
                  <td>CHINCHON DE CANARD</td>
                  <td>7.50€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute w-64 right-[10vw] top-[260px] lg:block hidden">
            <img src="../PICTO-TAPAS.png" alt="tapas" />
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
