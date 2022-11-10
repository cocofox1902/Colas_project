import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homes from './Homes';
import Contact from './Contact';
import Cartes from './Cartes';
import Ambiance from './Ambiance';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/ambiance" element={<Ambiance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
