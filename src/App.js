import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homes from "./Homes";
import Contact from "./Contact";
import Cartes from "./Cartes";
import Ambiance from "./Ambiance";
import Navbar from "./Components/Navbar";
import Burger from "./Burger";
import Tapas from "./Tapas";
import Vin from "./Vin";
import Tartines from "./Tartines";
import Couscous from "./Couscous";
import Footer from "./Components/Footer";
import Blog from "./Blog";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ambiance" element={<Ambiance />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/cartes/burgers" element={<Burger />} />
          <Route path="/cartes/tapas" element={<Tapas />} />
          <Route path="/cartes/vin" element={<Vin />} />
          <Route path="/cartes/Tartines" element={<Tartines />} />
          <Route path="/cartes/couscous" element={<Couscous />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
