import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark text-white">
      <div className="flex justify-center bg-bordeau ">
        <img src="../PICTO-VIN.png" className="md:hidden w-56 pt-5" alt="" />
      </div>
      <div className="flex justify-center bg-bordeau h-[500px]">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../VINS.png"
            alt="burger_titre"
            className="md:w-2/4 w-full"
          />
          <div className="flex pb-10">
            <table>
              <thead>
                <tr>
                  <th className="md:w-40 w-32"></th>
                  <th className="md:w-20 w-14"></th>
                  <th className="md:w-20 w-14"></th>
                  <th className="md:w-20 w-14"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-left">ROUGES</th>
                  <th className="text-left">14cl</th>
                  <th className="text-left">25cl</th>
                  <th className="text-left">50cl</th>
                  <th className="text-left">75cl</th>
                </tr>
                <tr>
                  <td>Côtes-du-Rhône</td>
                  <td>4.90€</td>
                  <td>7.50€</td>
                  <td>12.90€</td>
                  <td>25.00€</td>
                </tr>
                <tr>
                  <td>Merlot</td>
                  <td>4.00€</td>
                  <td>7.50€</td>
                  <td>12.90€</td>
                  <td>19.00€</td>
                </tr>
                <tr>
                  <td>Pic Saint-Loup</td>
                  <td>6.00€</td>
                  <td>11.50€</td>
                  <td>15.50€</td>
                  <td>28.00€</td>
                </tr>
                <tr>
                  <td>Chinon</td>
                  <td>5.00€</td>
                  <td>9.90€</td>
                  <td>14.00€</td>
                  <td>23.00€</td>
                </tr>
                <tr>
                  <td className="font-bold">BLANCS</td>
                </tr>
                <tr>
                  <td>Chardonnay</td>
                  <td>4.90€</td>
                  <td>7.50€</td>
                  <td>14.00€</td>
                  <td>25.00€</td>
                </tr>
                <tr>
                  <td>Petits Ponts</td>
                  <td>4.00€</td>
                  <td>7.00€</td>
                  <td>12.50€</td>
                  <td>19.00€</td>
                </tr>
                <tr>
                  <td>Chablis</td>
                  <td>6.50€</td>
                  <td>8.90€</td>
                  <td>16.00€</td>
                  <td>27.00€</td>
                </tr>
                <tr>
                  <td className="font-bold">CHAMPAGNE</td>
                </tr>
                <tr>
                  <td>Coupe</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>7.00€</td>
                </tr>
                <tr>
                  <td>Bouteille</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>56.00€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute w-64 right-[10vw] top-[260px] lg:block hidden">
            <img src="../PICTO-VIN.png" alt="burger" />
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
          <button className="text-5xl font-bold border-2 p-5 m-2 bg-wheat text-dark">
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
