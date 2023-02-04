import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homes from './Homes';
import Contact from './Contact';
import Cartes from './Cartes';
import Ambiance from './Ambiance';
import Navbar from './Components/Navbar';
import Burger from './Burger';
import Tapas from './Tapas';
import Vin from './Vin';
import Viandes from './Viandes';
import Salade from './Salade';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ambiance" element={<Ambiance />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/cartes/burgers" element={<Burger />} />
          <Route path="/cartes/tapas" element={<Tapas />} />
          <Route path="/cartes/vin" element={<Vin />} />
          <Route path="/cartes/viandes" element={<Viandes />} />
          <Route path="/cartes/salade" element={<Salade />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
