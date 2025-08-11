import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Details from './pages/Details';

function App() {
  return (
    <Router>
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
