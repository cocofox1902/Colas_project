import React from 'react';
import Home from "./Components/Home";
import Reservation from "./Components/Reservation";
import BurgerReserve from "./Components/BurgerReserve";
import ShowBurger from "./Components/ShowBurger";
import Tapas from "./Components/Tapas";
import ShowTapas from "./Components/ShowTapas";
import Bar from "./Components/Bar";
import Commentaire from "./Components/Commentaire";
import Footer from "./Components/Footer";

const Homes = () => {
    return (
        <>
            <Home />
            <Reservation />
            <BurgerReserve />
            <ShowBurger />
            <Tapas />
            <ShowTapas />
            <Bar />
            <Commentaire />
            <Footer />
        </>
    );
};

export default Homes;