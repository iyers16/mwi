import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, ArrowRight, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
    const [isOrdered, setIsOrdered] = useState(false);

    const handleOrder = (e) => {
        e.preventDefault();
        setIsOrdered(true);
        setTimeout(() => {
            clearCart();
        }, 2000);
    };

    if (isOrdered) {
        return (
            <div className="page-offset">
                <section className="section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ textAlign: 'center', maxWidth: '500px' }}
                    >
                        <CheckCircle size={100} color="var(--primary)" style={{ marginBottom: '30px' }} />
                        <h1 className="font-heading" style={{ fontSize: '3rem', marginBottom: '20px' }}>THANK YOU!</h1>
                        <p style={{ color: '#888', marginBottom: '40px', fontSize: '1.2rem' }}>
                            Your order has been received. You'll get a text when it's ready for pickup at our Alexander St. location.
                        </p>
                        <Link to="/" className="btn">Return Home</Link>
                    </motion.div>
                </section>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="page-offset">
                <section className="section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <ShoppingBag size={80} color="#222" style={{ marginBottom: '30px' }} />
                        <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>YOUR CART IS EMPTY</h2>
                        <Link to="/shop" className="btn">Go Shopping</Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="page-offset">
            <section className="section">
                <div className="container">
                    <h1 className="font-heading" style={{ fontSize: '3.5rem', marginBottom: '60px' }}>CHECKOUT</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px' }}>
                        {/* Cart Items List */}
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'rgba(255,255,255,0.05)' }}>
                                {cart.map(item => (
                                    <div key={item.id} style={{ background: 'var(--dark)', padding: '24px', display: 'flex', alignItems: 'center', gap: '30px', borderBottom: '1px solid #111' }}>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ color: '#888', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>{item.brand}</h4>
                                            <h3 className="font-heading" style={{ fontSize: '1.2rem' }}>{item.name}</h3>
                                            <p style={{ color: '#555', fontSize: '0.85rem' }}>{item.size}</p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#050505', padding: '5px 15px', borderRadius: '4px' }}>
                                            <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>-</button>
                                            <span style={{ fontWeight: 700 }}>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>+</button>
                                        </div>
                                        <div style={{ width: '100px', textAlign: 'right' }}>
                                            <p style={{ fontWeight: 900, fontSize: '1.2rem' }}>${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer' }} className="hover:text-primary">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Summary & Form */}
                        <div style={{ position: 'sticky', top: 'var(--header-height)' }}>
                            <div style={{ background: '#111', padding: '40px', borderRadius: '8px' }}>
                                <h3 className="font-heading" style={{ marginBottom: '30px' }}>ORDER SUMMARY</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#888' }}>Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#888' }}>Pickup Fee</span>
                                        <span style={{ color: 'var(--primary)', fontWeight: 700 }}>FREE</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #222' }}>
                                        <span className="font-heading" style={{ fontSize: '1.2rem' }}>Total</span>
                                        <span className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <form onSubmit={handleOrder} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Phone for Pickup Alert</label>
                                        <input required type="tel" placeholder="(514) 000-0000" style={{ padding: '15px', background: '#050505', border: '1px solid #222', color: 'white', outline: 'none' }} />
                                    </div>
                                    <button className="btn" style={{ width: '100%', marginTop: '10px' }}>Place Pickup Order <ArrowRight size={20} /></button>
                                </form>
                                <p style={{ fontSize: '0.75rem', color: '#444', marginTop: '20px', textAlign: 'center' }}>
                                    By placing this order you agree to pay upon pickup at the store.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 400px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Checkout;
