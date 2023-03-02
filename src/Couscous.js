import React from "react";
import { Link } from "react-router-dom";

const Cartes = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark text-whitepb-32">
      <div className="flex justify-center bg-blue ">
        <img src="../picto_burger.png" class="md:hidden w-56" alt="" />
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
