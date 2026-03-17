import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CruisesPage from './pages/CruisesPage';
import CruiseDetailsPage from './pages/CruiseDetailsPage';
import ChartersPage from './pages/ChartersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import SocialProofTicker from './components/SocialProofTicker';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-zinc-800 bg-zinc-50 overflow-x-hidden selection:bg-primary-200 selection:text-primary-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cruises" element={<CruisesPage />} />
            <Route path="/cruises/:handle" element={<CruiseDetailsPage />} />
            <Route path="/charters" element={<ChartersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <SocialProofTicker />
      </div>
    </Router>
  );
}

export default App;

