import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flyer from './pages/Flyer';
import Visit from './pages/Visit';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import './index.css';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router basename="/mwi/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/flyer" element={<Layout><Flyer /></Layout>} />
          <Route path="/visit" element={<Layout><Visit /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
