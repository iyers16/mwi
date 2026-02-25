import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageSquare } from 'lucide-react';

const Visit = () => {
    const storeInfo = [
        { icon: <MapPin size={32} />, label: "Location", value: "4706-33 Rue Alexander, Pierrefonds, QC H8Y 2B1" },
        { icon: <Phone size={32} />, label: "Call Us", value: "(514) 685-6444" },
        { icon: <Clock size={32} />, label: "Hours", value: "Daily: 9:00 AM - 8:00 PM" },
        { icon: <Mail size={32} />, label: "Email", value: "support@marchewestisland.com" }
    ];

    return (
        <div className="page-offset">
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'start' }}>
                        {/* Left: Store Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="font-heading" style={{ fontSize: '3.5rem', marginBottom: '40px' }}>FIND US</h1>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                                {storeInfo.map((info, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                                        <div style={{ color: 'var(--primary)', flexShrink: 0 }}>{info.icon}</div>
                                        <div>
                                            <h4 className="font-heading" style={{ fontSize: '0.9rem', color: '#666', letterSpacing: '0.1em' }}>{info.label}</h4>
                                            <p style={{ fontSize: '1.25rem', marginTop: '5px' }}>{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div style={{ marginTop: '60px', width: '100%', height: '350px', background: '#111', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', flexDirection: 'column', gap: '20px' }}>
                                <MapPin size={64} opacity={0.2} />
                                <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>Interactive Map Loading...</p>
                            </div>
                        </motion.div>

                        {/* Right: Message Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ background: 'white', padding: '60px', borderRadius: '12px', color: 'black' }}
                        >
                            <h2 className="font-heading" style={{ color: 'black', fontSize: '2rem', marginBottom: '30px' }}>SEND A MESSAGE</h2>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Your Name</label>
                                    <input type="text" placeholder="John Doe" style={{ padding: '15px', border: '2px solid #eee', borderRadius: '4px', outline: 'none', transition: '0.3s' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '15px', border: '2px solid #eee', borderRadius: '4px', outline: 'none', transition: '0.3s' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Message</label>
                                    <textarea rows="5" placeholder="How can we help?" style={{ padding: '15px', border: '2px solid #eee', borderRadius: '4px', outline: 'none', transition: '0.3s' }}></textarea>
                                </div>
                                <button className="btn" style={{ background: 'black', marginTop: '10px' }}>Send Request <MessageSquare size={18} /></button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Visit;
