import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.1)', background: '#050505' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
                <div>
                    <h3 className="font-brand" style={{ fontSize: '2rem', marginBottom: '24px' }}>Marche West Island</h3>
                    <p style={{ color: '#888', maxWidth: '300px' }}>Quality produce, unbeatable prices, and a shopping experience that feels like home since 2016.</p>
                </div>
                <div>
                    <h4 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '24px', letterSpacing: '0.1em' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li><a href="/" style={{ color: '#888', textDecoration: 'none' }}>Overview</a></li>
                        <li><a href="/flyer" style={{ color: '#888', textDecoration: 'none' }}>Weekly Specials</a></li>
                        <li><a href="/visit" style={{ color: '#888', textDecoration: 'none' }}>Hours & Location</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '24px', letterSpacing: '0.1em' }}>Connect</h4>
                    <p style={{ color: '#888' }}>4706-33 Rue Alexander<br />Pierrefonds, QC H8Y 2B1<br />(514) 685-6444</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <p style={{ color: '#444', fontSize: '0.85rem' }}>&copy; 2026 MARCHE WEST ISLAND. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
