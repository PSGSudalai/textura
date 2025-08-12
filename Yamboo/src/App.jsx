import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Details from './pages/Details';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayouts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
      </MainLayouts>
    </Router>
  );
}

export default App;
