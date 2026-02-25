import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="glass">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 40px' }}>
                <Link to="/" className="font-brand" style={{ fontSize: '2.4rem', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
                    Marche <span style={{ color: 'var(--primary)' }}>West Island</span>
                </Link>

                <div className="mobile-hide" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Overview</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>E-Grocery</NavLink>
                    <NavLink to="/flyer" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Weekly Specials</NavLink>
                    <NavLink to="/visit" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Hours & Support</NavLink>

                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }}></div>

                    <Link to="/checkout" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', transition: '0.3s', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <ShoppingBag size={22} className="hover:text-primary" />
                        {cartCount > 0 && (
                            <span style={{ position: 'absolute', top: '-10px', right: '-12px', background: 'var(--primary)', color: 'white', fontSize: '0.7rem', fontWeight: 900, width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--black)' }}>
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/shop" className="btn" style={{ padding: '10px 24px', fontSize: '0.85rem', minWidth: 'auto' }}>
                        Order Now
                    </Link>
                </div>

                <button className="md-show" style={{ display: 'none', background: 'none', border: 'none', color: 'white', zIndex: 1001 }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .mobile-hide { display: none !important; }
          .md-show { display: block !important; }
        }
      `}</style>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', background: 'var(--black)', padding: '120px 40px', display: 'flex', flexDirection: 'column', gap: '30px', fontSize: '1.5rem', fontWeight: 700, zIndex: 1000 }}
                    >
                        <Link to="/" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }} className="font-heading">OVERVIEW</Link>
                        <Link to="/shop" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }} className="font-heading">E-GROCERY</Link>
                        <Link to="/flyer" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }} className="font-heading">WEEKLY SPECIALS</Link>
                        <Link to="/visit" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }} className="font-heading">HOURS & SUPPORT</Link>
                        <Link to="/checkout" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary)', textDecoration: 'none' }} className="font-heading">CART ({cartCount})</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
