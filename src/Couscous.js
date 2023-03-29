import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark text-white">
      <div className="flex justify-center bg-Bleuclair ">
        <img src="../PICTO-COUSCOUS.png" class="md:hidden w-56 pt-5" alt="" />
      </div>
      <div className="flex justify-center bg-Bleuclair h-[500px]">
        <div className="text-dark grid justify-center place-items-center w-full">
          <img
            src="../COUSCOUS.png"
            alt="burger_titre"
            className="md:w-2/4 w-full"
          />
          <div className="flex text-lg">
            <table className="table-fixed mt-5 mb-10">
              <thead>
                <tr>
                  <th className="w-80"></th>
                  <th className="w-22"></th>
                </tr>
              </thead>
              <tbody className="font-bold">
                <tr>
                  <td>COUSCOUS BOUEF</td>
                  <td>13.50€</td>
                </tr>
                <tr>
                  <td>COUSCOUS POULET FERMIER</td>
                  <td>14.90€</td>
                </tr>
                <tr>
                  <td>COUSCOUS MERGUEZ</td>
                  <td>12.90€</td>
                </tr>
                <tr>
                  <td>COUSCOUS LEGUMES</td>
                  <td>12.00€</td>
                </tr>
                <tr>
                  <td>COUSCOUS BROCHETTES</td>
                  <td>13.90€</td>
                </tr>
                <tr>
                  <td>COUSCOUS SOURIS D'AGNEAU CONFITE</td>
                  <td>22.00€</td>
                </tr>
                <tr>
                  <td>LE ROYAL</td>
                  <td>24.90€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute w-64 right-[10vw] top-[260px] lg:block hidden">
            <img src="../PICTO-COUSCOUS.png" alt="burger" />
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
          <button className="text-5xl font-bold border-2 p-5 m-2 hover:bg-wheat hover:text-dark">
            Tartines
          </button>
        </Link>
        <Link to="/cartes/couscous" className="grid">
          <button className="text-5xl font-bold border-2 p-5 m-2 bg-wheat text-dark">
            Couscous
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cartes;
