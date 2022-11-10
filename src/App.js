import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Reservation from "./Components/Reservation";
import BurgerReserve from "./Components/BurgerReserve";
import ShowBurger from "./Components/ShowBurger";
import Tapas from "./Components/Tapas";
import ShowTapas from "./Components/ShowTapas";
import Bar from "./Components/Bar";
import Commentaire from "./Components/Commentaire";
import Footer from "./Components/Footer";
import HomeMenu from "./Components/HomeMenu";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <Home />
      <Reservation />
      <BurgerReserve />
      <ShowBurger />
      <Tapas />
      <ShowTapas />
      <Bar />
      <Commentaire />
      <Footer />
      <Navbar />
      <HomeMenu />
    </div>
  );
}

export default App;
