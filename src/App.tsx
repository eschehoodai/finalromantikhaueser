import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackgroundMusic from './components/layout/BackgroundMusic';
import FloatingQuickbook from './components/ui/FloatingQuickbook';
import ConsentManager from './components/ui/ConsentManager';
import StructuredData from './components/seo/StructuredData';
import { CookieProvider } from './context/CookieContext';

import Home from './pages/Home';
import RomantikHotel from './pages/RomantikHotel';
import Bauernhaus from './pages/Bauernhaus';
import Restaurant from './pages/Restaurant';
import Arrangements from './pages/Arrangements';
import Umgebung from './pages/Umgebung';
import Buchung from './pages/Buchung';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  return (
    <CookieProvider>
      <div className="app-container">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/romantik-hotel" element={<RomantikHotel />} />
          <Route path="/romantik-hotel.html" element={<RomantikHotel />} />
          <Route path="/bauernhaus" element={<Bauernhaus />} />
          <Route path="/bauernhaus.html" element={<Bauernhaus />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurant.html" element={<Restaurant />} />
          <Route path="/arrangements" element={<Arrangements />} />
          <Route path="/arrangements.html" element={<Arrangements />} />
          <Route path="/umgebung" element={<Umgebung />} />
          <Route path="/umgebung.html" element={<Umgebung />} />
          <Route path="/buchung" element={<Buchung />} />
          <Route path="/buchung.html" element={<Buchung />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kontakt.html" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/impressum.html" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/datenschutz.html" element={<Datenschutz />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingQuickbook />
        <BackgroundMusic />
        <ConsentManager />
        <StructuredData />
      </div>
    </CookieProvider>
  );
}
