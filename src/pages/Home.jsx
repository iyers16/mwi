import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/mwi.jpg';

const Home = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    return (
        <div className="page-offset">
            {/* Hero Section */}
            <section style={{ height: '90vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <motion.div
                    style={{ y, position: 'absolute', top: 0, left: 0, width: '100%', height: '140%', zIndex: -1 }}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} />
                </motion.div>

                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '850px' }}
                    >
                        <span className="font-heading" style={{ color: 'var(--primary)', letterSpacing: '0.4em' }}>PIERREFONDS TRADITION</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 6.5rem)', lineHeight: 0.85, margin: '20px 0 40px', fontWeight: 900 }}>
                            YOUR NEIGHBORHOOD <br />
                            <span className="text-primary">FRESH MARKET</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: '#ccc', marginBottom: '50px', maxWidth: '550px', lineHeight: 1.6 }}>
                            Since 2016, we've been bringing the finest local produce and international groceries to the West Island community.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <Link to="/flyer" className="btn">View Weekly Specials</Link>
                            <Link to="/visit" className="btn btn-outline">Store Info</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Benefits */}
            <section className="section" style={{ background: '#050505' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { icon: <Star />, title: "Quality First", desc: "Hand-picked produce delivered daily from local farms." },
                            { icon: <Clock />, title: "Open Daily", desc: "Serving you 7 days a week from 9 AM to 8 PM." },
                            { icon: <MapPin />, title: "Easy Access", desc: "Conveniently located in Pierrefonds with ample parking." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 className="font-heading" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{item.title}</h3>
                                <p style={{ color: '#888' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Pantry Preview */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="font-heading" style={{ color: 'var(--primary)', letterSpacing: '0.2em' }}>ORDER ONLINE</span>
                        <h2 className="font-heading" style={{ fontSize: '3rem', marginTop: '10px' }}>PANTRY FAVORITES</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        {[
                            { name: "Star Seasoning", brand: "Maggi", price: "$5.99" },
                            { name: "Vegetable Oil", brand: "Cedar", price: "$7.99" },
                            { name: "Milo Malt", brand: "Nestlé", price: "$19.99" },
                            { name: "Chicken Drumsticks", brand: "Meat", price: "$21.99" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}
                            >
                                <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '5px' }}>{item.brand}</p>
                                <h4 className="font-heading" style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{item.name}</h4>
                                <p style={{ fontWeight: 900, marginBottom: '20px' }}>{item.price}</p>
                                <Link to="/shop" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    SHOP NOW <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Access to Flyer */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{ background: 'var(--primary)', padding: '100px 40px', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 className="font-heading" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>DON'T MISS OUT ON DEALS</h2>
                            <p style={{ fontSize: '1.4rem', marginBottom: '40px', opacity: 0.9 }}>Check our weekly flyer for unbeatable savings on fresh produce.</p>
                            <Link to="/flyer" className="btn btn-secondary">Explore Specials <ArrowRight size={20} /></Link>
                        </div>
                        {/* Abstract background element */}
                        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '80%', background: 'rgba(0,0,0,0.1)', borderRadius: '100%', filter: 'blur(60px)' }}></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
