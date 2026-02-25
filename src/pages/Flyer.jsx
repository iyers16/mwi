import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ZoomIn } from 'lucide-react';
import flyer1 from '../assets/mwi1-resize-980x1268.jpg';
import flyer2 from '../assets/mwi2-resize-980x1268.jpg';
import flyer3 from '../assets/mwi3-resize-980x1268.jpg';
import flyer4 from '../assets/mwi4-resize-980x1268.jpg';

const Flyer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const flyers = [
        { img: flyer1, title: "Cover Specials" },
        { img: flyer2, title: "Produce & Dairy" },
        { img: flyer3, title: "Meat & Deli" },
        { img: flyer4, title: "Grocery Essentials" }
    ];

    return (
        <div className="page-offset">
            <section className="section" style={{ paddingBottom: '40px' }}>
                <div className="container">
                    <div style={{ borderLeft: '6px solid var(--primary)', paddingLeft: '30px', marginBottom: '60px' }}>
                        <span className="font-heading" style={{ color: '#666', letterSpacing: '0.2em' }}>FEBRUARY SAVINGS</span>
                        <h1 className="font-heading" style={{ fontSize: '4rem', marginTop: '10px' }}>WEEKLY SPECIALS</h1>
                        <p style={{ color: '#888', maxWidth: '600px', fontSize: '1.2rem', marginTop: '20px' }}>
                            Hand-picked deals across our entire store. Click on a flyer to view in full screen.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {flyers.map((flyer, i) => (
                            <motion.div
                                key={i}
                                className="flyer-card"
                                onClick={() => setSelectedImage(flyer.img)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="flyer-img-container" style={{ position: 'relative' }}>
                                    <img src={flyer.img} alt={flyer.title} />
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0,0,0,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: '0.3s'
                                    }} className="flyer-overlay">
                                        <ZoomIn size={48} color="white" />
                                    </div>
                                </div>
                                <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 className="font-heading" style={{ fontSize: '1.1rem' }}>{flyer.title}</h3>
                                    <button className="btn" style={{ padding: '8px 16px', minWidth: 'auto', fontSize: '0.75rem' }}>View</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px'
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="close-btn"
                            style={{ position: 'absolute', top: '30px', right: '30px', zIndex: 2001 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={48} strokeWidth={1} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .flyer-card:hover .flyer-overlay { opacity: 1 !important; }
      `}</style>
        </div>
    );
};

export default Flyer;
