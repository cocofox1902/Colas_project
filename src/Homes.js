import React from "react";
import Home from "./Components/Home";
import Reservation from "./Components/Reservation";
import BurgerReserve from "./Components/BurgerReserve";
import ShowBurger from "./Components/ShowBurger";
import Tapas from "./Components/Tapas";
import ShowTapas from "./Components/ShowTapas";
import Bar from "./Components/Bar";
import Commentaire from "./Components/Commentaire";

const Homes = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Home />
      <Reservation />
      <BurgerReserve />
      <div className="sm:block hidden">
        <ShowBurger />
      </div>
      <Tapas />
      <div className="sm:block hidden">
        <ShowTapas />
      </div>
      <Bar />
      <Commentaire />
    </>
  );
};

export default Homes;
